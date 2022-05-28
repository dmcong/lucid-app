import { useCallback, useEffect, useState } from 'react'
import { Button, Col, Row } from 'antd'

import { notifyError, notifySuccess } from 'app/helper'
import { useLucid } from 'app/hooks/useLucid'

import { useOracles } from 'app/hooks/useOracles'
import { PoolDetailsProps } from '../poolDetails/index'
import { CardValue } from '../pools'
import { useWallet } from '@senhub/providers'
import { usePoolData } from 'app/hooks/pool/usePoolData'
import { numeric } from 'shared/util'
import { usePoolPrices } from 'app/hooks/pool/usePoolPrices'
import BN from 'bn.js'

const Deposit = ({ poolAddress }: PoolDetailsProps) => {
  const poolData = usePoolData(poolAddress)
  const poolPrices = usePoolPrices(poolAddress)
  const [loading, setLoading] = useState(false)
  const lucid = useLucid()
  const { undecimalize } = useOracles()
  const [lptLocked, setLptLocked] = useState('0')
  const [baseAmount, setBaseAmout] = useState('0')
  const [baseAmountBN, setBaseAmoutBN] = useState(new BN(0))
  const { wallet } = useWallet()

  const fetchDebt = useCallback(async () => {
    const accouts = await lucid.getTokenAccounts(
      wallet.address,
      poolAddress,
      poolData.mint,
      poolData.baseMint,
    )
    let debt = 0
    let baseAmount = 0
    try {
      console.log('accouts.cheque', accouts.cheque)
      const debtAccount = await lucid.program.account.cheque.fetch(
        accouts.cheque,
      )
      console.log('debtAccount', debtAccount)
      //@ts-ignore
      debt = Number(undecimalize(debtAccount.borrowAmount, 9))
      console.log('debt', debtAccount.authority.toBase58())
      baseAmount = Number(undecimalize(debtAccount.baseAmount, 9))
      setBaseAmoutBN(debtAccount.baseAmount)
    } catch (error) {}
    setLptLocked(String(debt))
    setBaseAmout(String(baseAmount))
  }, [
    lucid,
    poolAddress,
    poolData.baseMint,
    poolData.mint,
    undecimalize,
    wallet.address,
  ])
  useEffect(() => {
    fetchDebt()
  }, [fetchDebt])

  const onDeposit = async () => {
    try {
      setLoading(true)
      const { txId } = await lucid.repay(poolAddress, baseAmountBN)
      return notifySuccess('Replay', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Row gutter={[16, 16]} style={{ color: '#000000' }}>
      <Col span={12}>
        <CardValue
          label="DEBT"
          value={<span>{numeric(baseAmount).format('$0,0.[00]')}</span>}
        />
      </Col>
      <Col span={12}>
        <CardValue
          label="TOTAL LOCKED"
          value={
            <span>
              {numeric(Number(lptLocked) * poolPrices.lptPrice).format(
                '$0,0.[00]',
              )}
            </span>
          }
        />
      </Col>

      <Col span={24}>
        <Button loading={loading} block onClick={onDeposit} type="primary">
          Repay
        </Button>
      </Col>
    </Row>
  )
}

export default Deposit
