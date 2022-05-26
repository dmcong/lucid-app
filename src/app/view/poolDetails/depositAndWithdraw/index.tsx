import { Fragment, useState } from 'react'

import { Button, Modal, Tabs } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

const DepositAndWithdraw = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Fragment>
      <Button type="primary" size="large" onClick={() => setVisible(true)}>
        Deposit/Withdraw
      </Button>
      <Modal
        visible={visible}
        closeIcon={<IonIcon name="close-outline" />}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Tabs>
          <Tabs.TabPane key="deposit" tab="Deposit">
            Deposit
          </Tabs.TabPane>
          <Tabs.TabPane key="withdraw" tab="Withdraw">
            Withdraw
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    </Fragment>
  )
}

export default DepositAndWithdraw
