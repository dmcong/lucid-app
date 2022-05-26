import { Button, Card, Col, Row } from 'antd'
import React from 'react'

const Balances = () => {
  return (
    <Card>
      <Row gutter={[12, 12]}>
        <Col flex="auto">Balance</Col>
        <Col>
          <Button type="primary" block>
            Join
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default Balances
