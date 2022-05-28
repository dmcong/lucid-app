import { useSelector } from 'react-redux'

import { Card, Col, Row, Space, Typography } from 'antd'
import RowSpaceVertical from 'app/components/rowSpaceVertical'
import useAPR from 'app/hooks/pool/useAPR'
import { usePoolTvl } from 'app/hooks/pool/usePoolTvl'
import { AppState } from 'app/model'

import { MintAvatar, MintName, MintSymbol } from 'shared/antd/mint'
import { numeric } from 'shared/util'
import { PoolDetailsProps } from './index'

const PoolInfo = ({ poolAddress }: PoolDetailsProps) => {
  const pools = useSelector((state: AppState) => state.pools)
  const poolData = pools[poolAddress]
  const { mint } = poolData
  const mintAddress = mint.toBase58()
  const tvl = usePoolTvl(poolAddress)
  const apr = useAPR(poolAddress)

  return (
    <Card>
      <Row gutter={[8, 8]}>
        <Col span={8}>
          <RowSpaceVertical
            label={<Typography.Title level={5}>Protocol name</Typography.Title>}
            value={
              <Space>
                <MintAvatar mintAddress={mintAddress} />
                <Typography.Title level={3}>
                  <MintName mintAddress={mintAddress} />{' '}
                  <MintSymbol mintAddress={mintAddress} />
                </Typography.Title>
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
                value={
                  <Typography.Title level={3}>
                    $ {numeric(tvl).format('0,0.[00]')}
                  </Typography.Title>
                }
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
                value={
                  <Typography.Text type="secondary">
                    {numeric(apr).format('0,0')}%
                  </Typography.Text>
                }
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
