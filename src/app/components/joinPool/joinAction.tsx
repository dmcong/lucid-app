import { Fragment, ReactNode, useCallback, useState } from 'react'
import { numeric } from 'shared/util'
import { BN } from 'bn.js'

import { Button, Col, Modal, Row, Space, Typography } from 'antd'
import NumericInput from 'shared/antd/numericInput'
import { MintAvatar, MintSymbol } from 'shared/antd/mint'
import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'
import { notifyError, notifySuccess } from 'app/helper'
import { useOracles } from 'app/hooks/useOracles'
import { useLucid } from 'app/hooks/useLucid'

import configs from 'app/configs'

const {
  sol: { baseMint },
} = configs
const HARDCODE_POOL_ADDRESS = 'FHvzpH2y1G3hNppMsVcj8Mi8Nc5kAkvQi5G2Uj4hZjz5'
const DEFAULT_AMOUNT = new BN(0)

type RowContentProps = { label?: string; value?: ReactNode }
const RowContent = ({ label = '', value }: RowContentProps) => {
  return (
    <Row gutter={[24, 24]}>
      <Col flex="auto">{label}</Col>
      <Col>{value}</Col>
    </Row>
  )
}

type JoinActionProps = { poolAddress?: string }
const JoinAction = ({ poolAddress = '' }: JoinActionProps) => {
  const [visible, setVisible] = useState(false)
  const [amount, setAmount] = useState('0')
  const [loading, setLoading] = useState(false)
  const { balance } = useAccountBalanceByMintAddress(baseMint)
  const { decimalizeMintAmount } = useOracles()
  const lucid = useLucid()

  const disabled = !Number(amount) || Number(amount) > Number(balance)

  const onJoin = useCallback(async () => {
    if (disabled) return
    try {
      setLoading(true)
      const baseAmount = await decimalizeMintAmount(amount, baseMint)

      const { txId } = await lucid.addLiquidity(
        HARDCODE_POOL_ADDRESS,
        DEFAULT_AMOUNT,
        DEFAULT_AMOUNT,
        baseAmount,
      )
      setVisible(false)
      return notifySuccess('Join Hakapool Successfully', txId)
    } catch (err) {
      notifyError(err)
    } finally {
      setLoading(false)
    }
  }, [decimalizeMintAmount, amount, disabled, lucid])

  return (
    <Fragment>
      <Button
        type="primary"
        style={{ borderRadius: 999 }}
        onClick={() => setVisible(true)}
        block
      >
        Join now
      </Button>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={false}
        closable={false}
      >
        <Row gutter={[24, 24]} justify="end">
          <Col>
            <Space size={6}>
              <Typography.Text type="secondary">Available:</Typography.Text>
              <Typography.Text
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => setAmount(balance.toString())}
              >
                {numeric(balance).format('0,0.[0000]')}
              </Typography.Text>
            </Space>
          </Col>
          <Col span={24}>
            <Row gutter={[24, 24]} wrap={false} align="middle">
              <Col flex="auto">
                <NumericInput
                  bordered={false}
                  value={amount}
                  onValue={setAmount}
                  className="join-input"
                  suffix={<MintSymbol mintAddress={baseMint} />}
                />
              </Col>
              <Col>
                <Button
                  ghost
                  onClick={() => setAmount(balance.toString())}
                  style={{ borderRadius: 999 }}
                >
                  Max
                </Button>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Typography.Title level={5}>Review</Typography.Title>
          </Col>
          <Col span={24}>
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <RowContent
                  label="My supply"
                  value={
                    <Space>
                      <Typography.Text>
                        {numeric(amount).format('0,0.[0000]')}
                      </Typography.Text>
                      <MintSymbol mintAddress={baseMint} />
                    </Space>
                  }
                />
              </Col>
              <Col span={24}>
                <RowContent
                  label="Supply APR"
                  value={<Typography.Text>0.45%</Typography.Text>}
                />
              </Col>
              <Col span={24}>
                <RowContent
                  label="You will receive"
                  value={<Typography.Text>14.2LP</Typography.Text>}
                />
              </Col>
              <Col span={24}>
                <RowContent
                  label="Token will reward"
                  value={<MintAvatar mintAddress={baseMint} />}
                />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Button
              type="primary"
              style={{ borderRadius: 999 }}
              onClick={onJoin}
              disabled={disabled}
              loading={loading}
              block
            >
              Deposit
            </Button>
          </Col>
        </Row>
      </Modal>
    </Fragment>
  )
}

export default JoinAction
