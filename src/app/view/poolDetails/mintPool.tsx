import { useState } from 'react'

import { Button, Card, Col, Row } from 'antd'
import MintInput from 'app/components/mintInput'
import IonIcon from '@sentre/antd-ionicon'

import { useLucid } from 'app/hooks/useLucid'
import { notifyError, notifySuccess } from 'app/helper'
import { useOracles } from 'app/hooks/useOracles'
import { Address } from '@project-serum/anchor'

type MintPoolProps = {
  poolAddress: string
}

const MintPool = ({ poolAddress }: MintPoolProps) => {
  const [amount, setAmount] = useState('0')
  const [loading, setLoading] = useState(false)
  const lucid = useLucid()
  const { decimalizeMintAmount } = useOracles()
  const [baseMint, setBaseMint] = useState(
    '2z6Ci38Cx6PyL3tFrT95vbEeB3izqpoLdxxBkJk2euyj',
  )
  const [tokenMint, setTokenMint] = useState(
    'HJu2n1oZrjjxiCix442Ke5SCYbbih7btjBMqwXcoibbR',
  )

  const onBuy = async () => {
    setLoading(true)
    try {
      const amountBN = await decimalizeMintAmount(amount, baseMint)
      // console.log(amountBN.toNumber(), 'amountBN')
      const { txId } = await lucid.buy(poolAddress, amountBN, amountBN)
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  const onSell = async () => {
    setLoading(true)
    try {
      const amountBN = await decimalizeMintAmount(amount, tokenMint)
      // console.log(amountBN.toNumber(), 'amountBN')
      const { txId } = await lucid.sell(poolAddress, amountBN)
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <Row gutter={[12, 12]} justify="center">
        <Col span={24}>
          <MintInput
            amount={amount}
            selectedMint={'HJu2n1oZrjjxiCix442Ke5SCYbbih7btjBMqwXcoibbR'}
            onChangeAmount={setAmount}
            ratioButton={null}
          />
        </Col>
        <Col>
          <Button
            className="btn-switch-type"
            size="small"
            icon={<IonIcon name="git-compare-outline" />}
          />
        </Col>
        <Col span={24}>
          <MintInput
            amount={amount}
            selectedMint={'2z6Ci38Cx6PyL3tFrT95vbEeB3izqpoLdxxBkJk2euyj'}
            onChangeAmount={setAmount}
            ratioButton={null}
          />
        </Col>
        <Col>
          <Button type="primary" block onClick={onSell}>
            Swap
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default MintPool
