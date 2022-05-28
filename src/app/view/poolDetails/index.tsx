import { useParams } from 'react-router-dom'

import { Col, Row } from 'antd'
import Lending from './lending'
import MintStable from './mintStable'
import MintPool from './mintPool'
import Balances from './balances'
import PoolInfo from './poolInfo'
import Header from './header'

import './index.less'

export type PoolDetailsProps = {
  poolAddress: string
}

const PoolDetails = () => {
  const params = useParams<{ poolId: string }>()
  const poolAddress = params.poolId

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Header poolAddress={poolAddress} />
      </Col>
      <Col span={24}>
        <PoolInfo poolAddress={poolAddress} />
      </Col>
      <Col span={24}>
        <Balances />
      </Col>
      <Col span={12}>
        <MintStable />
      </Col>
      <Col span={12}>
        <MintPool poolAddress={poolAddress} />
      </Col>
      <Col flex="auto">
        <Lending />
      </Col>
    </Row>
  )
}

export default PoolDetails
