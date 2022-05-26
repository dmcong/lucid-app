import { Button, Modal } from 'antd'
import React, { Fragment, useState } from 'react'
import IonIcon from '@sentre/antd-ionicon'
import { ModalContent } from './modalContent'
import { useLucid } from 'app/hooks/useLucid'

const CreatePool = () => {
  const [visible, setVisible] = useState(false)

  return (
    <Fragment>
      <Button onClick={() => setVisible(true)}>New</Button>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={false}
        closeIcon={<IonIcon name="close-outline" />}
        title="Create new pool"
      >
        <ModalContent />
      </Modal>
    </Fragment>
  )
}

export default CreatePool
