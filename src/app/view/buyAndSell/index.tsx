import { Fragment, useState } from 'react'
import IonIcon from '@sentre/antd-ionicon'

import { Col, Modal, Row, Segmented } from 'antd'
import { SegmentedValue } from 'antd/lib/segmented'
import MintPool from './buy'
import ButtonNeon from 'app/components/buttonNeon'

const BuyAndSell = ({ poolAddress }: { poolAddress: string }) => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<SegmentedValue>('Buy')

  return (
    <Fragment>
      {/* <Button type="primary" onClick={() => setVisible(true)}>
        Buy / Sell
      </Button> */}
      <ButtonNeon onClick={() => setVisible(true)}>Buy / Sell</ButtonNeon>
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
              options={['Buy', 'Sell']}
            />
          </Col>
          <Col span={24}>
            {value === 'Buy' ? <MintPool poolAddress={poolAddress} /> : <></>}
          </Col>
        </Row>
      </Modal>
    </Fragment>
  )
}

export default BuyAndSell
