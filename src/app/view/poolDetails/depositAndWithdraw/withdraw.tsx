import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Button, Col, Row } from 'antd'
import NumericInput from 'shared/antd/numericInput'
import { PoolDetailsProps } from '../index'

import { AppState } from 'app/model'
import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'
import { numeric } from 'shared/util'
import { useLucid } from 'app/hooks/useLucid'
import { useOracles } from 'app/hooks/useOracles'
import { notifyError, notifySuccess } from 'app/helper'

const Withdraw = ({ poolAddress }: PoolDetailsProps) => {
  const [amount, setAmount] = useState('0')
  const [loading, setLoading] = useState(false)
  const pools = useSelector((state: AppState) => state.pools)
  const { lptMint } = pools[poolAddress]
  const balance = useAccountBalanceByMintAddress(lptMint.toBase58())
  const lucid = useLucid()
  const { decimalizeMintAmount } = useOracles()

  const onWithdraw = async () => {
    try {
      setLoading(true)
      const amountBN = await decimalizeMintAmount(amount, lptMint)
      console.log(amountBN.toNumber(), 'amountBN')
      const { txId } = await lucid.removeLiquidity(poolAddress, amountBN)
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>Available: {numeric(balance.balance).format('0,0')}</Col>
      <Col span={24}>
        <NumericInput onValue={setAmount} />
      </Col>
      <Col span={24}>
        <Button block loading={loading} onClick={onWithdraw} type="primary">
          Withdraw
        </Button>
      </Col>
    </Row>
  )
}

export default Withdraw
