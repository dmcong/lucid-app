import { Fragment, useState } from 'react'
import IonIcon from '@sentre/antd-ionicon'

import { Button, Modal, Tabs } from 'antd'
import Repay from './repay'
import Borrow from './borrow'

import { PoolDetailsProps } from '../poolDetails/index'

const BorrowAnhRepay = ({ poolAddress }: PoolDetailsProps) => {
  const [visible, setVisible] = useState(false)
  return (
    <Fragment>
      <Button type="primary" size="large" onClick={() => setVisible(true)}>
        Borrow/Repay
      </Button>
      <Modal
        visible={visible}
        closeIcon={<IonIcon name="close-outline" />}
        onCancel={() => setVisible(false)}
        footer={null}
        className="lucid-modal-gradient"
      >
        <Tabs>
          <Tabs.TabPane key="Borrow" tab="Borrow">
            <Borrow poolAddress={poolAddress} />
          </Tabs.TabPane>
          <Tabs.TabPane key="Repay" tab="Repay">
            <Repay poolAddress={poolAddress} />
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    </Fragment>
  )
}

export default BorrowAnhRepay
