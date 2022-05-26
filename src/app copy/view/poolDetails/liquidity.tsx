import { Button, Card, Col, Row } from 'antd'
import React from 'react'

const Liquidity = () => {
  return (
    <Card>
      <Row gutter={[12, 12]}>
        <Col>
          <Button type="primary" block>
            Deposit
          </Button>
        </Col>
        <Col>
          <Button type="primary" block>
            Withdraw
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default Liquidity
