import { Fragment, useState } from 'react'

import { Button, Modal, Tabs } from 'antd'
import IonIcon from '@sentre/antd-ionicon'
import Deposit from './deposit'

import { PoolDetailsProps } from '../index'
import Withdraw from './withdraw'

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
