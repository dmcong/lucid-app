import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Button, Col, Row, Space, Typography } from 'antd'
import { MintAvatar } from 'shared/antd/mint'
import NumericInput from 'shared/antd/numericInput'
import { PoolDetailsProps } from '../index'

import { notifyError, notifySuccess } from 'app/helper'
import { useLucid } from 'app/hooks/useLucid'
import { AppState } from 'app/model'
import { useOracles } from 'app/hooks/useOracles'
import StableAvatar from 'app/components/stableAvatar'

const Deposit = ({ poolAddress }: PoolDetailsProps) => {
  const pools = useSelector((state: AppState) => state.pools)
  const [amount, setAmount] = useState('0')
  const [amountBase, setAmountBase] = useState('0')
  const [amountStable, setAmountStable] = useState('0')
  const [loading, setLoading] = useState(false)
  const { baseMint, mint, stableMint } = pools[poolAddress]
  const baseMintAddress = baseMint.toBase58()
  const mintAddress = mint.toBase58()
  const lucid = useLucid()

  const { decimalizeMintAmount } = useOracles()
  const onDeposit = async () => {
    try {
      setLoading(true)
      const amountBN = await decimalizeMintAmount(amount, mint)
      const amountBaseBN = await decimalizeMintAmount(amountBase, baseMint)
      const amountStableBN = await decimalizeMintAmount(
        amountStable,
        stableMint,
      )
      const { txId } = await lucid.addLiquidity(
        poolAddress,
        amountBN,
        amountBaseBN,
        amountStableBN,
      )
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <Typography.Title level={3}>Deposit</Typography.Title>
      </Col>
      <Col span={24}>
        <Space style={{ width: '100%' }}>
          <MintAvatar mintAddress={mintAddress} />
          <NumericInput onValue={setAmount} />
        </Space>
      </Col>
      <Col span={24}>
        <Space style={{ width: '100%' }}>
          <MintAvatar mintAddress={baseMintAddress} />
          <NumericInput onValue={setAmountBase} />
        </Space>
      </Col>
      <Col span={24}>
        <Space style={{ width: '100%' }}>
          <StableAvatar mintAddresses={[mintAddress, baseMintAddress]} />
          <NumericInput onValue={setAmountStable} />
        </Space>
      </Col>
      <Col span={24}>
        <Button loading={loading} block onClick={onDeposit} type="primary">
          Deposit
        </Button>
      </Col>
    </Row>
  )
}

export default Deposit
