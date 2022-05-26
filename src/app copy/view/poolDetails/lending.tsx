import { Button, Card, Col, Row } from 'antd'
import React from 'react'

const Lending = () => {
  return (
    <Card>
      <Row gutter={[12, 12]}>
        <Col>
          <Button type="primary" block>
            Borrowing
          </Button>
        </Col>
        <Col>
          <Button type="primary" block>
            Repay
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default Lending
