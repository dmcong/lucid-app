import { ReactNode, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { Button, Card, Col, Image, Row, Space, Typography } from 'antd'
import PoolCard from './poolCard'
import CreatePool from '../createPool'
import JoinPool from 'app/components/joinPool'

import { AppState } from 'app/model'
import IonIcon from '@sentre/antd-ionicon'

import IcoRank from 'app/static/images/ico-rank.svg'

type CardValueProps = { label?: string; value?: ReactNode; action?: ReactNode }
const CardValue = ({ label = '', value, action }: CardValueProps) => {
  return (
    <Card
      bordered={false}
      className="lucid-card-gradient"
      style={{
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Space direction="vertical">
        <Typography.Title level={1} style={{ color: '#579B04' }}>
          {value}
        </Typography.Title>
        <Typography.Text style={{ color: '#000' }}>{label}</Typography.Text>
        {action}
      </Space>
    </Card>
  )
}

const ActionClaim = () => {
  const claim = useCallback(() => {}, [])

  return (
    <Button type="text" onClick={claim}>
      <Typography.Text style={{ color: '#000', textDecoration: 'underline' }}>
        CLAIM ALL <IonIcon name="chevron-forward-outline" />
      </Typography.Text>
    </Button>
  )
}

const Pools = () => {
  const pools = useSelector((state: AppState) => state.pools)

  return (
    <Row gutter={[48, 48]} justify="center" align="middle">
      <Col span={24}>
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={8}>
            <Space direction="vertical">
              <Typography.Title level={2} style={{ color: '#ABFC47' }}>
                THE AUTO
              </Typography.Title>
              <Typography.Text>
                A single deposit generates yield from Hakapool positions, the
                highest quality yield sources in the Sentre ecosystem.
              </Typography.Text>
            </Space>
          </Col>
          <Col xs={24} lg={8}>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <CardValue
                  label="TOTAL VALUE LOCK"
                  value={<span>$23.323.333</span>}
                />
              </Col>
              <Col span={24}>
                <CardValue label="YOUR POSITION" value={<span>$17.323</span>} />
              </Col>
            </Row>
          </Col>
          <Col xs={24} lg={8}>
            <CardValue
              label="MY REWARD"
              value={<span>$0.00</span>}
              action={<ActionClaim />}
            />
          </Col>
        </Row>
      </Col>

      {/* Join Pool */}
      <Col span={24}>
        <JoinPool />
      </Col>

      <Col flex="auto">
        <Row gutter={[24, 24]} justify="center" align="middle">
          {Object.keys(pools).map((poolAddress, i) => (
            <Col span={24} key={poolAddress} className="wrap-card-pool">
              {i === 0 && (
                <Image
                  className="ico-number-one"
                  src={IcoRank}
                  alt="number one"
                />
              )}
              <PoolCard rank={i} poolAddress={poolAddress} />
            </Col>
          ))}
        </Row>
      </Col>
      <Col span={6}>
        <Space direction="vertical" size={12} style={{ textAlign: 'right' }}>
          <Space direction="vertical" size={4}>
            <Typography.Title level={5} style={{ color: '#ABFC47' }}>
              CREATE LIQUIDIY POOL
            </Typography.Title>
            <Typography.Title level={4} style={{ color: '#ABFC47' }}>
              NOT HARDER
            </Typography.Title>
          </Space>
          <Typography.Text>
            A single deposit generates yield from Hakapool positions, the
            highest quality yield sources in the Sentre ecosystem.
          </Typography.Text>
        </Space>
      </Col>
    </Row>
  )
}

export default Pools
