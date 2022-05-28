import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Button, Col, Row, Space, Typography } from 'antd'
import NumericInput from 'shared/antd/numericInput'
import { PoolDetailsProps } from '../poolDetails/index'

import { AppState } from 'app/model'
import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'
import { numeric } from 'shared/util'
import { useLucid } from 'app/hooks/useLucid'
import { useOracles } from 'app/hooks/useOracles'
import { notifyError, notifySuccess } from 'app/helper'
import { MintSymbol } from 'shared/antd/mint'

const Borrow = ({ poolAddress }: PoolDetailsProps) => {
  const [amount, setAmount] = useState('0')
  const [loading, setLoading] = useState(false)
  const pools = useSelector((state: AppState) => state.pools)
  const { lptMint, baseMint } = pools[poolAddress]
  const { balance } = useAccountBalanceByMintAddress(lptMint.toBase58())
  const lucid = useLucid()
  const { decimalizeMintAmount } = useOracles()

  const onWithdraw = async () => {
    try {
      setLoading(true)
      const amountBN = await decimalizeMintAmount(amount, lptMint)
      const { txId } = await lucid.borrow(poolAddress, amountBN)
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Row>
          <Col flex="auto">
            <Typography.Text style={{ color: '#292321', fontSize: 12 }}>
              You don't have to fear liquidation risk
            </Typography.Text>
          </Col>
          <Col>
            <Typography.Text style={{ color: '#000000' }}>
              Available: {numeric(balance).format('0,0')} LPT
            </Typography.Text>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row>
          <Col flex="auto">
            <Button
              type="primary"
              onClick={() => setAmount(balance.toString())}
            >
              Max
            </Button>
          </Col>
          <Col>
            <Space>
              <NumericInput
                bordered={false}
                onValue={setAmount}
                style={{
                  color: '#000000',
                  fontSize: 30,
                  fontWeight: 700,
                  width: 150,
                  textAlign: 'right',
                }}
                value={amount}
              />
              <Typography.Title level={4} style={{ color: '#000000' }}>
                LPT
              </Typography.Title>
            </Space>
          </Col>
          <Col span={24}>
            <Typography.Title style={{ color: '#000000' }} level={4}>
              Review
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Row>
              <Col flex="auto">
                <Typography.Text style={{ color: '#000000' }}>
                  User USDC
                </Typography.Text>
              </Col>
              <Col>
                <Typography.Title level={4} style={{ color: '#000000' }}>
                  {numeric(Number(amount) / 2).format('0,0.[000]')}{' '}
                  <MintSymbol mintAddress={baseMint.toBase58()} />
                </Typography.Title>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Button block loading={loading} onClick={onWithdraw} type="primary">
          Borrow
        </Button>
      </Col>
    </Row>
  )
}

export default Borrow
