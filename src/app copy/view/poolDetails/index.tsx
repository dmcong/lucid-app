import { Col, Row } from 'antd'
import Lending from './lending'
import Liquidity from './liquidity'
import MintStable from './mintStable'
import MintPool from './mintPool'
import Balances from './balances'

const PoolDetails = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Balances />
      </Col>
      <Col span={12}>
        <MintStable />
      </Col>
      <Col span={12}>
        <MintPool />
      </Col>
      <Col span={12}>
        <Liquidity />
      </Col>
      <Col flex="auto">
        <Lending />
      </Col>
    </Row>
  )
}

export default PoolDetails
