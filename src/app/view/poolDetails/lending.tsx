import React, { useState } from 'react'

import { Button, Card, Col, Row } from 'antd'

import { useOracles } from 'app/hooks/useOracles'
import { useLucid } from 'app/hooks/useLucid'
import { notifyError, notifySuccess } from 'app/helper'
import configs from 'app/configs'
import { useSelector } from 'react-redux'
import { AppState } from 'app/model'

const {
  sol: { baseMint },
} = configs

type LendingProps = {
  poolAddress: string
}

const Lending = ({ poolAddress }: LendingProps) => {
  const pools = useSelector((state: AppState) => state.pools)
  const [amount, setAmount] = useState(1)
  const [loading, setLoading] = useState(false)
  const { decimalizeMintAmount } = useOracles()
  const lucid = useLucid()
  const [tokenMint, setTokenMint] = useState(
    'HJu2n1oZrjjxiCix442Ke5SCYbbih7btjBMqwXcoibbR',
  )

  const { lptMint } = pools[poolAddress]

  const onBorrow = async () => {
    setLoading(true)
    try {
      const amountBN = await decimalizeMintAmount(amount, lptMint)
      // console.log(amountBN.toNumber(), 'amountBN')
      const { txId } = await lucid.borrow(poolAddress, amountBN)
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  const onRepay = async () => {
    setLoading(true)
    try {
      const amountBN = await decimalizeMintAmount(amount, baseMint)
      // console.log(amountBN.toNumber(), 'amountBN')
      const { txId } = await lucid.repay(poolAddress, amountBN)
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <Row gutter={[12, 12]}>
        <Col>
          <Button type="primary" block onClick={onBorrow}>
            Borrowing
          </Button>
        </Col>
        <Col>
          <Button type="primary" block onClick={onRepay}>
            Repay
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default Lending
