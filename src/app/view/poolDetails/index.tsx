import { useParams } from 'react-router-dom'

import { Col, Row } from 'antd'
import Lending from './lending'
import MintStable from './mintStable'
import MintPool from './mintPool'
import Balances from './balances'
import PoolInfo from './poolInfo'
import Header from './header'

export type PoolDetailsProps = {
  poolAddress: string
}

const PoolDetails = () => {
  const params = useParams<{ poolId: string }>()
  const poolADdress = params.poolId

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24}>
        <PoolInfo poolAddress={poolADdress} />
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
