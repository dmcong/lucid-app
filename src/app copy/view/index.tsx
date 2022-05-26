import { useEffect } from 'react'
import { useUI } from '@senhub/providers'

import { Row, Col } from 'antd'

import BG from 'app/static/images/background.webp'
import Pools from './pools'
import { Route } from 'react-router-dom'
import { useAppRouter } from 'app/hooks/useAppRouter'
import PoolDetails from './poolDetails'

const View = () => {
  const { setBackground } = useUI()
  const { appRoute, params } = useAppRouter()

  useEffect(() => {
    setBackground({ light: BG, dark: BG })
  }, [setBackground])

  console.log('params', params)
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
