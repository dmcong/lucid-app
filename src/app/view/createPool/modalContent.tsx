import { Button, Col, Row, Typography } from 'antd'
import MintInput from 'app/components/mintInput'
import React, { useState } from 'react'
import { MintSelection } from 'shared/antd/mint'
import NumericInput from 'shared/antd/numericInput'
import IonIcon from '@sentre/antd-ionicon'
import { useOracles } from 'app/hooks/useOracles'
import { useLucid } from 'app/hooks/useLucid'
import { notifyError, notifySuccess } from 'app/helper'

import config from 'app/configs'
import { BN } from 'bn.js'

export const ModalContent = () => {
  const [mint, setMint] = useState('')
  const [amount, setAmount] = useState('0')
  const [price, setPrice] = useState('0')
  const [loading, setLoading] = useState(false)
  const { decimalizeMintAmount, decimalize } = useOracles()
  const lucid = useLucid()

  const onCreate = async () => {
    const FEE = new BN(10_000_000) // 1%
    try {
      setLoading(true)
      const stableAmount = Number(amount) * Number(price)
      const amountBN = await decimalizeMintAmount(amount, mint)
      const stableAmountBN = decimalize(stableAmount, 9)
      const { txId } = await lucid.initializePool(
        mint,
        config.sol.baseMint,
        FEE,
        amountBN,
        stableAmountBN,
        new BN(0),
      )
      notifySuccess('Create Pool', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Row gutter={[24, 24]}>
      {/* Token Amount */}
      <Col span={24}>
        <Row gutter={[0, 0]}>
          <Col span={24}>
            <Typography.Text type="secondary" className="caption">
              Token Amount
            </Typography.Text>
          </Col>
          <Col span={24}>
            <MintInput
              amount={amount}
              selectedMint={mint}
              onChangeAmount={setAmount}
              mintSelection={
                <MintSelection
                  value={mint}
                  onChange={setMint}
                  style={{ background: '#394360' }}
                />
              }
            />
          </Col>
        </Row>
      </Col>
      {/* Token Price */}
      <Col span={24}>
        <Row gutter={[0, 0]}>
          <Col span={24}>
            <Typography.Text type="secondary" className="caption">
              Price
            </Typography.Text>
          </Col>
          <Col span={24}>
            <NumericInput
              size="large"
              placeholder="0"
              value={price}
              onValue={setPrice}
              suffix={
                <Button
                  type="text"
                  size="small"
                  icon={<IonIcon name="reload-outline" />}
                  onClick={() => {}}
                >
                  Check
                </Button>
              }
            />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Button type="primary" block onClick={onCreate} disabled={loading}>
          Create
        </Button>
      </Col>
    </Row>
  )
}
