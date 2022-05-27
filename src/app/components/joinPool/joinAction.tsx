import { Fragment, ReactNode, useCallback, useState } from 'react'

import { Button, Col, Modal, Row, Space, Typography } from 'antd'
import NumericInput from 'shared/antd/numericInput'
import { MintSymbol } from 'shared/antd/mint'

type RowContentProps = { label?: string; value?: ReactNode }
const RowContent = ({ label = '', value }: RowContentProps) => {
  return (
    <Row gutter={[24, 24]}>
      <Col flex="auto">{label}</Col>
      <Col>{value}</Col>
    </Row>
  )
}

const JoinAction = () => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('0')

  const onJoin = useCallback(async () => {}, [])

  return (
    <Fragment>
      <Button
        type="primary"
        style={{ borderRadius: 999 }}
        onClick={() => setVisible(true)}
        block
      >
        Join now
      </Button>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={false}
        // closeIcon={<IonIcon name="close-outline" />}
        closable={false}
      >
        <Row gutter={[24, 24]} justify="end">
          <Col>
            <Space size={6}>
              <Typography.Text type="secondary">Available:</Typography.Text>
              <Typography.Text>{0}</Typography.Text>
            </Space>
          </Col>
          <Col span={24}>
            <Row gutter={[24, 24]} wrap={false} align="middle">
              <Col flex="auto">
                <NumericInput
                  bordered={false}
                  value={value}
                  onValue={setValue}
                  className="join-input"
                  suffix={<MintSymbol mintAddress="" />}
                />
              </Col>
              <Col>
                <Button ghost onClick={() => {}} style={{ borderRadius: 999 }}>
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
                  label="My supply"
                  value={
                    <Space>
                      <Typography.Text>18.5</Typography.Text>
                      <MintSymbol mintAddress="" />
                    </Space>
                  }
                />
              </Col>
              <Col span={24}>
                <RowContent
                  label="My supply"
                  value={
                    <Space>
                      <Typography.Text>18.5</Typography.Text>
                      <MintSymbol mintAddress="" />
                    </Space>
                  }
                />
              </Col>
              <Col span={24}>
                <RowContent
                  label="My supply"
                  value={
                    <Space>
                      <Typography.Text>18.5</Typography.Text>
                      <MintSymbol mintAddress="" />
                    </Space>
                  }
                />
              </Col>
              <Col span={24}>
                <RowContent
                  label="My supply"
                  value={
                    <Space>
                      <Typography.Text>18.5</Typography.Text>
                      <MintSymbol mintAddress="" />
                    </Space>
                  }
                />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Button type="primary" onClick={onJoin} block>
              Deposit
            </Button>
          </Col>
        </Row>
      </Modal>
    </Fragment>
  )
}

export default JoinAction
