import { useState } from 'react'

import { Button, Card, Col, Row } from 'antd'
import Selection from 'app/components/selection'

import './index.less'
import MintInput from '../mintInput'

const JoinPool = () => {
  const [bid, setBid] = useState('0')
  const [selectedMint, setSelectedMint] = useState('')

  return (
    <Card className="bg-gradient" bordered={false}>
      <Row gutter={[24, 24]} justify="space-between">
        <Col span={12}>
          {/* <Card
            bordered={false}
            style={{ padding: 0, background: '#ffffff29', borderRadius: 0 }}
          > */}
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <MintInput
                amount={bid}
                onChangeAmount={setBid}
                selectedMint={selectedMint}
              />
            </Col>
            <Col span={24}>
              <Button type="primary" onClick={() => {}} block>
                Join now
              </Button>
            </Col>
          </Row>
          {/* </Card> */}
        </Col>
        <Col span={12}></Col>
      </Row>
    </Card>
  )
}

export default JoinPool
