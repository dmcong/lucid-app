import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useMint } from '@senhub/providers'

import { Button, Col, Row, Space, Typography } from 'antd'
import { MintSelection } from 'shared/antd/mint'

import { notifyError, notifySuccess } from 'app/helper'
import { useLucid } from 'app/hooks/useLucid'
import { AppState } from 'app/model'
import { useOracles } from 'app/hooks/useOracles'
import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'
import { numeric } from 'shared/util'
import { PoolDetailsProps } from '../poolDetails/index'
import NumericInput from 'shared/antd/numericInput'
import { BN } from 'bn.js'
import { useLucidOracles } from 'app/hooks/useLucidOracles'
import { BASE_TOKEN_DECIMAL } from 'app/constants'

const Deposit = ({ poolAddress }: PoolDetailsProps) => {
  const pools = useSelector((state: AppState) => state.pools)
  const { baseMint, mint, lptMint, balance, baseBalance, lptSupply, fee } =
    pools[poolAddress]
  const [amount, setAmount] = useState('0')
  const [baseAmount, setBaseAmount] = useState('0')
  const [loading, setLoading] = useState(false)
  const lucid = useLucid()
  const { decimalizeMintAmount } = useOracles()
  const mintBalance = useAccountBalanceByMintAddress(mint.toBase58())
  const baseBalanceOfAddress = useAccountBalanceByMintAddress(
    baseMint.toBase58(),
  )
  const lptBalance = useAccountBalanceByMintAddress(lptMint.toBase58())
  const { calcDepositInfo } = useLucidOracles()
  const { getDecimals } = useMint()

  const onDeposit = async () => {
    try {
      setLoading(true)
      const amountBN = await decimalizeMintAmount(amount, mint)
      const baseBN = await decimalizeMintAmount(baseAmount, baseMint)
      const { txId } = await lucid.addLiquidity(
        poolAddress,
        amountBN,
        new BN(0),
        baseBN,
      )
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  const onChangeDepositAmount = async (value: string) => {
    setAmount(value)
    const amountBN = await decimalizeMintAmount(amount, mint)
    const baseAmountBN = await decimalizeMintAmount(amount, baseMint)
    // const amountBN = await decimalizeMintAmount(amount, lptMint)
    const amountIns = [amountBN, baseAmountBN]
    const balanceIns = [balance, baseBalance]
    const tokeDecimals = await getDecimals(mint.toBase58())
    const decimalIns = [tokeDecimals, BASE_TOKEN_DECIMAL]
    const lpt = calcDepositInfo(
      amountIns,
      balanceIns,
      lptSupply,
      decimalIns,
      fee,
    )
    console.log(lpt, 'lpt da tinh duoc')
  }

  return (
    <Row gutter={[16, 16]} style={{ color: '#000000' }}>
      <Col span={24} style={{ textAlign: 'right' }}>
        <Typography.Text style={{ color: '#000000' }}>
          Available: {numeric(mintBalance.balance).format('0,0.[000]')}
        </Typography.Text>
      </Col>
      <Col span={24}>
        <Row justify="space-between">
          <Col>
            <Button
              type="primary"
              onClick={() => setAmount(mintBalance.balance.toString())}
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
              onValue={onChangeDepositAmount}
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
              disabled
              value={mint.toBase58()}
            />
          </Col>
        </Row>
      </Col>
      {/* Base Token */}
      <Col span={24} style={{ textAlign: 'right' }}>
        <Typography.Text style={{ color: '#000000' }}>
          Available: {numeric(baseBalanceOfAddress.balance).format('0,0.[000]')}
        </Typography.Text>
      </Col>
      <Col span={24}>
        <Row justify="space-between">
          <Col>
            <Button
              type="primary"
              onClick={() => setAmount(baseBalanceOfAddress.balance.toString())}
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
              value={baseAmount}
              onValue={setBaseAmount}
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
              disabled
              value={baseMint.toBase58()}
            />
          </Col>
        </Row>
      </Col>
      {/* Review */}
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
                {numeric(lptBalance.balance).format('0,0.[000]')}
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
