import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { Button, Col, Row, Space, Typography } from 'antd'
import NumericInput from 'shared/antd/numericInput'

import { AppState } from 'app/model'
import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'
import { numeric } from 'shared/util'
import { useLucid } from 'app/hooks/useLucid'
import { useOracles } from 'app/hooks/useOracles'
import { notifyError, notifySuccess } from 'app/helper'
import { MintAvatar, MintSymbol } from 'shared/antd/mint'
import { usePoolAmounts } from 'app/hooks/pool/usePoolAmounts'

const Withdraw = ({ poolAddress }: { poolAddress: string }) => {
  const [amount, setAmount] = useState('0')
  const [loading, setLoading] = useState(false)
  const pools = useSelector((state: AppState) => state.pools)
  const { lptMint, baseMint, mint } = pools[poolAddress]
  const { balance } = useAccountBalanceByMintAddress(lptMint.toBase58())
  const lucid = useLucid()
  const { decimalizeMintAmount } = useOracles()
  const {
    lptAmount,
    stableAmount,
    amount: poolAmount,
  } = usePoolAmounts(poolAddress)
  const ratio = useMemo(() => Number(amount) / lptAmount, [amount, lptAmount])
  const usdReceive = stableAmount * ratio
  const tokenReceive = poolAmount * ratio

  const onWithdraw = async () => {
    try {
      setLoading(true)
      const amountBN = await decimalizeMintAmount(amount, lptMint)
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
      <Col span={24}>
        <Row>
          <Col flex="auto" />
          <Col>
            <Typography.Text style={{ color: '#000000' }}>
              Available: {numeric(balance).format('0,0')}
            </Typography.Text>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row gutter={[24, 24]} wrap={false} align="middle">
          <Col flex="auto">
            <NumericInput
              bordered={false}
              onValue={setAmount}
              style={{
                fontSize: 35,
                fontWeight: 700,
                textAlign: 'right',
                color: '#000000',
              }}
              value={amount}
            />
          </Col>
          <Col>
            <Button
              type="primary"
              onClick={() => setAmount(balance.toString())}
            >
              Max
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Typography.Title level={5} style={{ color: '#000000' }}>
          You will receive
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <Space>
              <Typography.Text style={{ color: '#000000' }}>
                {numeric(usdReceive).format('0,0.[000]')}
              </Typography.Text>
              <Typography.Text style={{ color: '#000000' }}>
                <MintSymbol mintAddress={baseMint.toBase58()} />
              </Typography.Text>
              <MintAvatar mintAddress={baseMint.toBase58()} />
            </Space>
          </Col>
          <Col span={24}>
            <Space>
              <Typography.Text style={{ color: '#000000' }}>
                {numeric(tokenReceive).format('0,0.[000]')}
              </Typography.Text>
              <Typography.Text style={{ color: '#000000' }}>
                <MintSymbol mintAddress={mint.toBase58()} />
              </Typography.Text>
              <MintAvatar mintAddress={mint.toBase58()} />
            </Space>
          </Col>
        </Row>
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
