import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useWallet } from '@senhub/providers'

import { Row, Col, Typography, Button, Space } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import BG from 'app/static/images/background.webp'
import Pools from './pools'
import { Route } from 'react-router-dom'
import { useAppRouter } from 'app/hooks/useAppRouter'
import PoolDetails from './poolDetails'
import { AppDispatch, AppState } from 'app/model'
import { increaseCounter } from 'app/model/main.controller'
import configs from 'app/configs'
import { createPDB } from 'shared/pdb'

const {
  manifest: { appId },
} = configs

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
