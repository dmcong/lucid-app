import { Button, Card, Col, Row } from 'antd'
import MintInput from 'app/components/mintInput'
import React, { useState } from 'react'

const MintStable = () => {
  const [amount, setAmount] = useState('0')

  const onMint = () => {}
  const onBurn = () => {}
  return (
    <Card>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <MintInput
            amount={amount}
            selectedMint={'2z6Ci38Cx6PyL3tFrT95vbEeB3izqpoLdxxBkJk2euyj'}
            onChangeAmount={setAmount}
          />
        </Col>
        <Col span={12}>
          <Button type="primary" block onClick={onMint}>
            Mint
          </Button>
        </Col>
        <Col span={12}>
          <Button type="ghost" block onClick={onBurn}>
            Burn
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default MintStable
