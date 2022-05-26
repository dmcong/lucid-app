import { Col, Row, Space, Typography } from 'antd'
import PoolCard from './poolCard'
import CreatePool from '../createPool'
import { useSelector } from 'react-redux'
import { AppState } from 'app/model'
import JoinPool from 'app/components/joinPool'

const Pools = () => {
  const pools = useSelector((state: AppState) => state.pools)
  return (
    <Row gutter={[48, 48]} justify="center" align="middle">
      <Col span={24}>
        <Row justify="center" align="middle">
          <Col>
            <Space>
              <Typography.Title>Top Pool</Typography.Title>
              <Typography.Title type="success">Lucid</Typography.Title>
            </Space>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col>
            <Space>
              <Typography.Text>Click</Typography.Text>
              <CreatePool />
              <Typography.Text>to create pool</Typography.Text>
            </Space>
          </Col>
        </Row>
      </Col>

      {/* Join Pool */}
      <Col span={24}>
        <JoinPool />
      </Col>

      <Col span={24}>
        <Row gutter={[24, 24]} justify="center" align="middle">
          {Object.keys(pools).map((poolAddress, i) => (
            <Col span={24} key={poolAddress}>
              <PoolCard rank={i} poolAddress={poolAddress} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default Pools
