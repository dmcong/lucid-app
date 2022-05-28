import { Fragment, useState } from 'react'
import IonIcon from '@sentre/antd-ionicon'

import { Button, Modal } from 'antd'

const JupiterMarket = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Fragment>
      <Button onClick={() => setVisible(true)}>Open Jupiter Market</Button>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={false}
        closeIcon={<IonIcon name="close-outline" />}
        title="Create new pool"
      >
        Jupiter Market
      </Modal>
    </Fragment>
  )
}

export default JupiterMarket
