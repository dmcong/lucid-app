import { Fragment, useState } from 'react'
import IonIcon from '@sentre/antd-ionicon'

import { Button, Col, Modal, Row, Segmented } from 'antd'
import Repay from './repay'
import Borrow from './borrow'

import { SegmentedValue } from 'antd/lib/segmented'

const BorrowAnhRepay = ({ poolAddress }: { poolAddress: string }) => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<SegmentedValue>('Borrow')

  return (
    <Fragment>
      <Button type="primary" onClick={() => setVisible(true)}>
        Borrow / Repay
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
              options={['Borrow', 'Repay']}
            />
          </Col>
          <Col span={24}>
            {value === 'Borrow' ? (
              <Borrow poolAddress={poolAddress} />
            ) : (
              <Repay poolAddress={poolAddress} />
            )}
          </Col>
        </Row>
      </Modal>
    </Fragment>
  )
}

export default BorrowAnhRepay
