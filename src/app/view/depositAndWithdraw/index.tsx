import { Fragment, useState } from 'react'
import IonIcon from '@sentre/antd-ionicon'

import { Button, Col, Modal, Row, Segmented } from 'antd'
import Deposit from './deposit'
import Withdraw from './withdraw'
import { SegmentedValue } from 'antd/lib/segmented'

const DepositAndWithdraw = ({ poolAddress }: { poolAddress: string }) => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<SegmentedValue>('Deposit')

  return (
    <Fragment>
      <Button type="primary" onClick={() => setVisible(true)}>
        Deposit/Withdraw
      </Button>
      <Modal
        visible={visible}
        closeIcon={<IonIcon name="close-outline" />}
        onCancel={() => setVisible(false)}
        footer={null}
        className="lucid-modal-gradient"
      >
        <Row gutter={[24, 24]}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Segmented
              value={value}
              onChange={(value) => setValue(value)}
              options={['Deposit', 'Withdraw']}
            />
          </Col>
          <Col span={24}>
            {value === 'Deposit' ? (
              <Deposit poolAddress={poolAddress} />
            ) : (
              <Withdraw poolAddress={poolAddress} />
            )}
          </Col>
        </Row>
      </Modal>
    </Fragment>
  )
}

export default DepositAndWithdraw
