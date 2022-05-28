import { Fragment, ReactNode, useCallback, useEffect, useState } from 'react'
import { fetchCGK, numeric } from 'shared/util'
import { BN } from 'bn.js'
import { useMint } from '@senhub/providers'

import { Button, Col, Modal, Row, Space, Typography } from 'antd'
import NumericInput from 'shared/antd/numericInput'
import {
  MintAvatar,
  MintName,
  MintSelection,
  MintSymbol,
} from 'shared/antd/mint'
import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'
import { notifyError, notifySuccess } from 'app/helper'
import { useOracles } from 'app/hooks/useOracles'
import { useLucid } from 'app/hooks/useLucid'
import { useBestPoolAddress } from 'app/hooks/pool/useBestPoolData'
import { usePoolData } from 'app/hooks/pool/usePoolData'

import configs from 'app/configs'
import './button.less'

const {
  sol: { baseMint },
} = configs

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
const JoinAction = ({ poolAddress }: JoinActionProps) => {
  const [visible, setVisible] = useState(false)
  const [mint, setMint] = useState(baseMint)
  const [amount, setAmount] = useState('0')
  const [total, setTotal] = useState('0')
  const [loading, setLoading] = useState(false)
  const { balance } = useAccountBalanceByMintAddress(mint)
  const { decimalizeMintAmount } = useOracles()
  const { tokenProvider } = useMint()
  let bestPoolAddress = useBestPoolAddress()
  if (poolAddress) bestPoolAddress = poolAddress
  const bestPoolData = usePoolData(bestPoolAddress)

  const lucid = useLucid()

  const disabled = !Number(amount) || Number(amount) > Number(balance)

  const onJoin = useCallback(async () => {
    if (disabled) return
    try {
      setLoading(true)
      const amountBN = await decimalizeMintAmount(amount, mint)
      const amountOutBN = await decimalizeMintAmount(total, baseMint)
      const isBaseMint = mint === baseMint

      if (!isBaseMint)
        await lucid.swapJupiter(baseMint, mint, amountBN, amountOutBN)

      console.log('amountOutBN', amountOutBN.toNumber())
      const { txId } = await lucid.addLiquidity(
        bestPoolAddress,
        DEFAULT_AMOUNT,
        DEFAULT_AMOUNT,
        isBaseMint ? amountBN : amountOutBN,
      )
      setVisible(false)
      return notifySuccess('Join Hakapool Successfully', txId)
    } catch (err) {
      notifyError(err)
    } finally {
      setLoading(false)
    }
  }, [
    disabled,
    decimalizeMintAmount,
    amount,
    mint,
    total,
    lucid,
    bestPoolAddress,
  ])

  const fetchTotal = useCallback(async () => {
    if (!mint) return
    const tokenInfo = await tokenProvider.findByAddress(mint)
    const ticket = tokenInfo?.extensions?.coingeckoId
    if (ticket) {
      const info = await fetchCGK(ticket)
      return setTotal(String(Number(amount) * info.price))
    }
    return setTotal('0')
  }, [amount, mint, tokenProvider])
  useEffect(() => {
    fetchTotal()
  }, [fetchTotal])

  return (
    <Fragment>
      <Col flex="auto">
        {/* eslint-disable jsx-a11y/no-redundant-roles */}
        <button
          className="button-53"
          role="button"
          onClick={() => setVisible(true)}
        >
          Join Now
        </button>
        {/* <div className="btn-group">
          <div className="btn ball">
            <button>
              <div className="joinnow-ball"></div>Join now
              <span data-letters="Go!"></span>
              <span data-letters="Go!"></span>
            </button>
          </div>
        </div> */}
      </Col>

      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={false}
        closable={false}
      >
        <Row gutter={[24, 24]} justify="end" align="middle">
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
          <Col>
            <MintSelection value={mint} onChange={setMint} />
          </Col>
          <Col span={24}>
            <Row gutter={[24, 24]} wrap={false} align="middle">
              <Col flex="auto">
                <NumericInput
                  bordered={false}
                  value={amount}
                  onValue={setAmount}
                  className="join-input"
                  suffix={<MintSymbol mintAddress={mint} />}
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
                  label="Total Value"
                  value={
                    <Space>
                      <Typography.Text>
                        ${numeric(total).format('0,0.[0000]')}
                      </Typography.Text>
                    </Space>
                  }
                />
              </Col>

              <Col span={24}>
                <RowContent
                  label="HakaPool will Join"
                  value={
                    <Space>
                      <MintName mintAddress={bestPoolData.mint.toBase58()} />
                      <MintAvatar mintAddress={bestPoolData.mint.toBase58()} />
                    </Space>
                  }
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
