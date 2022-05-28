import { useSelector } from 'react-redux'
import { numeric } from 'shared/util'
import IonIcon from '@sentre/antd-ionicon'

import { Button, Card, Col, Row, Space, Typography } from 'antd'
import { MintAvatar, MintName, MintSymbol } from 'shared/antd/mint'
import CardContent from './cardContent'

import { useAppRouter } from 'app/hooks/useAppRouter'
import { AppState } from 'app/model'
import { usePoolFees } from 'app/hooks/pool/usePoolFees'

import './style.less'

type PoolCardProps = { rank: number; poolAddress: string }

const PoolCard = ({ rank, poolAddress }: PoolCardProps) => {
  const poolData = useSelector((state: AppState) => state.pools[poolAddress])
  const { pushHistory } = useAppRouter()
  const fee = usePoolFees(poolAddress)

  const onClick = () => {
    pushHistory(`/pool/${poolAddress}`)
  }

  return (
    <Card
      bordered={false}
      className={`pool-card top-${rank + 1}`}
      onClick={onClick}
    >
      <Row gutter={[24, 24]} align="middle">
        <Col>
          <Typography.Title level={5}>{rank + 1}</Typography.Title>
        </Col>
        <Col>
          <MintAvatar mintAddress={poolData.mint.toBase58()} size={48} />
        </Col>
        <Col span={4}>
          <Space direction="vertical">
            <Typography.Title level={5} ellipsis>
              <MintName mintAddress={poolData.mint.toBase58()} />
            </Typography.Title>
            <Typography.Title
              level={5}
              className="symbol"
              style={{ color: '#000' }}
            >
              <MintSymbol mintAddress={poolData.mint.toBase58()} />
            </Typography.Title>
          </Space>
        </Col>

        <Col span={3}>
          <CardContent
            primary
            label="APY"
            value={numeric(Math.random()).format('0.00[00]%')}
          />
        </Col>
        <Col span={4}>
          <CardContent
            label="Total Fee"
            value={numeric(fee.totalFee).format('0,0.00[00]')}
            mintAddress={poolData.baseMint.toBase58()}
          />
        </Col>
        <Col span={4}>
          <CardContent
            label="Total Value Locked"
            value={numeric(Math.random() * 100000).format('0,0.00[00]')}
            mintAddress={poolData.baseMint.toBase58()}
          />
        </Col>
        <Col span={4}>
          <CardContent
            label="Your Liquidity"
            value={numeric(Math.random() * 100000).format('0,0.00[00]')}
            mintAddress={poolData.baseMint.toBase58()}
          />
        </Col>
        <Col>
          <Button
            type="text"
            style={{ padding: 0, background: 'transparent' }}
            onClick={() => {}}
          >
            <IonIcon name="arrow-forward-outline" style={{ fontSize: 32 }} />
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default PoolCard
