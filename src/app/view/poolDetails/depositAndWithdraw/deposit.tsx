import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import isEqual from 'react-fast-compare'

import { Button, Col, Row, Space, Typography } from 'antd'
import { MintSelection } from 'shared/antd/mint'

import { notifyError, notifySuccess } from 'app/helper'
import { useLucid } from 'app/hooks/useLucid'
import { AppState } from 'app/model'
import { useOracles } from 'app/hooks/useOracles'
import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'
import { numeric } from 'shared/util'
import { PoolDetailsProps } from '../index'
import NumericInput from 'shared/antd/numericInput'

const Deposit = ({ poolAddress }: PoolDetailsProps) => {
  const pools = useSelector((state: AppState) => state.pools)
  const { baseMint, mint, stableMint } = pools[poolAddress]
  const baseMintAddress = baseMint.toBase58()
  const mintAddress = mint.toBase58()
  const stableMintAddress = stableMint.toBase58()
  const [unknownToken, setUnknownToken] = useState(baseMintAddress)
  const [amount, setAmount] = useState('0')
  const [loading, setLoading] = useState(false)
  const lucid = useLucid()
  const { decimalizeMintAmount } = useOracles()
  const { balance } = useAccountBalanceByMintAddress(unknownToken)

  const listAmount = useMemo(() => {
    if (isEqual(unknownToken, mintAddress)) return [amount, 0, 0]
    if (isEqual(unknownToken, baseMintAddress)) return [0, amount, 0]
    if (isEqual(unknownToken, stableMintAddress)) return [0, 0, amount]
    return [0, 0, 0]
  }, [amount, baseMintAddress, mintAddress, stableMintAddress, unknownToken])

  const onDeposit = async () => {
    try {
      setLoading(true)
      const amountBN = await decimalizeMintAmount(
        listAmount[0],
        baseMintAddress,
      )
      const baseBN = await decimalizeMintAmount(listAmount[1], baseMintAddress)
      const stableBN = await decimalizeMintAmount(
        listAmount[2],
        baseMintAddress,
      )
      const { txId } = await lucid.addLiquidity(
        poolAddress,
        amountBN,
        stableBN,
        baseBN,
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
            <NumericInput
              style={{
                color: '#000000',
                textAlign: 'center',
                border: 'none',
                fontSize: '20px',
                fontWeight: 700,
              }}
              value={amount}
              onValue={setAmount}
            />
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
              value={unknownToken}
              onChange={setUnknownToken}
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
