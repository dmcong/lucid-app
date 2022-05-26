import { Button, Col, Row } from 'antd'
import { useAppRouter } from 'app/hooks/useAppRouter'
import DepositAndWithdraw from './depositAndWithdraw'

const Header = () => {
  const { pushHistory } = useAppRouter()
  return (
    <Row>
      <Col flex="auto">
        <Button onClick={() => pushHistory('/')}>Back</Button>
      </Col>
      <Col>
        <DepositAndWithdraw />
      </Col>
    </Row>
  )
}

export default Header
