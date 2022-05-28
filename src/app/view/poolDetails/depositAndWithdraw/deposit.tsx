import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Button, Col, Row, Space, Typography } from 'antd'
import { MintAvatar, MintSelection } from 'shared/antd/mint'
import NumericInput from 'shared/antd/numericInput'
import { PoolDetailsProps } from '../index'

import { notifyError, notifySuccess } from 'app/helper'
import { useLucid } from 'app/hooks/useLucid'
import { AppState } from 'app/model'
import { useOracles } from 'app/hooks/useOracles'
import StableAvatar from 'app/components/stableAvatar'
import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'
import { numeric } from 'shared/util'
import { BN } from 'bn.js'

const Deposit = ({ poolAddress }: PoolDetailsProps) => {
  const pools = useSelector((state: AppState) => state.pools)
  const { baseMint } = pools[poolAddress]
  const baseMintAddress = baseMint.toBase58()
  const [mintAddress, setMintAddress] = useState(baseMintAddress)
  const [amount, setAmount] = useState('0')
  const [loading, setLoading] = useState(false)
  const lucid = useLucid()
  const { decimalizeMintAmount } = useOracles()
  const { balance } = useAccountBalanceByMintAddress(mintAddress)

  const onDeposit = async () => {
    try {
      setLoading(true)
      const amountBN = await decimalizeMintAmount(amount, baseMintAddress)

      const { txId } = await lucid.addLiquidity(
        poolAddress,
        amountBN,
        new BN(0),
        new BN(0),
      )
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Row gutter={[16, 16]} style={{ color: '#000000' }}>
      <Col span={24} style={{ textAlign: 'right' }}>
        <Typography.Text style={{ color: '#000000' }}>
          Available: {numeric(balance).format('0,0.[000]')}
        </Typography.Text>
      </Col>
      <Col span={24}>
        <Row justify="space-between">
          <Col>
            <Button
              type="primary"
              onClick={() => setAmount(balance.toString())}
            >
              MAX
            </Button>
          </Col>
          <Col>
            <Typography.Title style={{ color: '#000000' }} level={2}>
              {numeric(amount).format('0,0.[000]')}
            </Typography.Title>
          </Col>
          <Col>
            <MintSelection
              style={{
                background: '#F4FCEB',
                color: '#000000',
                borderRadius: 32,
                height: 40,
                width: 135,
              }}
              value={mintAddress}
              onChange={setMintAddress}
            />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Typography.Title style={{ color: '#000000' }} level={4}>
          Review
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Row>
            <Col flex="auto">
              <Typography.Text style={{ color: '#000000' }}>
                My supply
              </Typography.Text>
            </Col>
            <Col>
              <Typography.Title level={4} style={{ color: '#000000' }}>
                {numeric(amount).format('0,0.[000]')}
              </Typography.Title>
            </Col>
          </Row>
          <Row>
            <Col flex="auto">
              <Typography.Text style={{ color: '#000000' }}>
                You will receive
              </Typography.Text>
            </Col>
            <Col>
              <Typography.Title level={4} style={{ color: '#000000' }}>
                {numeric(amount).format('0,0.[000]')}
              </Typography.Title>
            </Col>
          </Row>
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
