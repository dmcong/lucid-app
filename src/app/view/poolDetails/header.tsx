import { Button, Col, Row } from 'antd'
import { useAppRouter } from 'app/hooks/useAppRouter'
import { PoolDetailsProps } from './index'
import DepositAndWithdraw from '../depositAndWithdraw'

const Header = ({ poolAddress }: PoolDetailsProps) => {
  const { pushHistory } = useAppRouter()
  return (
    <Row>
      <Col flex="auto">
        <Button onClick={() => pushHistory('/')}>Back</Button>
      </Col>
      <Col>
        <DepositAndWithdraw poolAddress={poolAddress} />
      </Col>
    </Row>
  )
}

export default Header
