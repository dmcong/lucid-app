import { Fragment, useState } from 'react'
import IonIcon from '@sentre/antd-ionicon'

import { Button, Modal, Tabs } from 'antd'
import Deposit from './deposit'
import Withdraw from './withdraw'

import { PoolDetailsProps } from '../index'

const DepositAndWithdraw = ({ poolAddress }: PoolDetailsProps) => {
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
        className="lucid-modal-gradient"
      >
        <Tabs>
          <Tabs.TabPane key="deposit" tab="Deposit">
            <Deposit poolAddress={poolAddress} />
          </Tabs.TabPane>
          <Tabs.TabPane key="withdraw" tab="Withdraw">
            <Withdraw poolAddress={poolAddress} />
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    </Fragment>
  )
}

export default DepositAndWithdraw
