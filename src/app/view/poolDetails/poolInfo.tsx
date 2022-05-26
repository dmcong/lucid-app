import { Card, Col, Row, Space, Typography } from 'antd'
import RowSpaceVertical from 'app/components/rowSpaceVertical'
import { MintAvatar, MintSymbol } from 'shared/antd/mint'

const PoolInfo = () => {
  return (
    <Card>
      <Row gutter={[8, 8]}>
        <Col span={8}>
          <RowSpaceVertical
            label={<Typography.Title level={5}>Protocol name</Typography.Title>}
            value={
              <Space>
                <MintAvatar mintAddress="11111111111111111111111111111111" />
                <Typography.Title level={3}>Solana (SOL)</Typography.Title>
              </Space>
            }
          />
        </Col>
        <Col span={16}>
          <Row gutter={[8, 8]}>
            <Col span={6}>
              <RowSpaceVertical
                label={
                  <Typography.Text type="secondary">
                    Total Value Locked
                  </Typography.Text>
                }
                value={<Typography.Title level={3}>$100.000</Typography.Title>}
              />
            </Col>
            <Col span={6}>
              <RowSpaceVertical
                label={
                  <Typography.Text type="secondary">Fee 24h</Typography.Text>
                }
                value={<Typography.Text>$100</Typography.Text>}
              />
            </Col>
            <Col span={6}>
              <RowSpaceVertical
                label={<Typography.Text type="secondary">APR</Typography.Text>}
                value={<Typography.Text type="secondary">105%</Typography.Text>}
              />
            </Col>
            <Col span={6}>
              <RowSpaceVertical
                label={
                  <Typography.Text type="secondary">Reward</Typography.Text>
                }
                value={
                  <Typography.Text>
                    <Space>
                      <MintAvatar mintAddress="2z6Ci38Cx6PyL3tFrT95vbEeB3izqpoLdxxBkJk2euyj" />
                      0.598
                      <MintSymbol mintAddress="2z6Ci38Cx6PyL3tFrT95vbEeB3izqpoLdxxBkJk2euyj" />
                      / Day
                    </Space>
                  </Typography.Text>
                }
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default PoolInfo
