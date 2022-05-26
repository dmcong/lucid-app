import { Button, Card, Col, Row } from 'antd'
import MintInput from 'app/components/mintInput'
import { useState } from 'react'
import IonIcon from '@sentre/antd-ionicon'

const MintPool = () => {
  const [amount, setAmount] = useState('0')

  const onSwap = () => {}

  return (
    <Card>
      <Row gutter={[12, 12]} justify="center">
        <Col span={24}>
          <MintInput
            amount={amount}
            selectedMint={'5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ'}
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
          <Button type="primary" block onClick={onSwap}>
            Swap
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default MintPool
