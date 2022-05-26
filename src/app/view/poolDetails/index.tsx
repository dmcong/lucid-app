import { Col, Row } from 'antd'
import Lending from './lending'
import MintStable from './mintStable'
import MintPool from './mintPool'
import Balances from './balances'
import PoolInfo from './poolInfo'
import Header from './header'

const PoolDetails = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24}>
        <PoolInfo />
      </Col>
      <Col span={24}>
        <Balances />
      </Col>
      <Col span={12}>
        <MintStable />
      </Col>
      <Col span={12}>
        <MintPool />
      </Col>
      <Col flex="auto">
        <Lending />
      </Col>
    </Row>
  )
}

export default PoolDetails
