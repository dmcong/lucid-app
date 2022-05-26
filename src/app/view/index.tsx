import { Route } from 'react-router-dom'

import { Row, Col } from 'antd'
import Pools from './pools'
import { useAppRouter } from 'app/hooks/useAppRouter'
import PoolDetails from './poolDetails'

const View = () => {
  const appRoute = useAppRouter()
  return (
    <Row gutter={[24, 24]} align="middle" justify="center">
      <Col style={{ maxWidth: 1200 }} span={24}>
        <Route exact path={`${appRoute}`} component={Pools} />
        <Route exact path={`${appRoute}/pool/:poolId`} component={Pools}>
          <PoolDetails />
        </Route>
      </Col>
    </Row>
  )
}

export default View
