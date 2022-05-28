import { useCallback, useEffect, useState } from 'react'

import { Button, Card, Col, Row } from 'antd'
import MintInput from 'app/components/mintInput'
import IonIcon from '@sentre/antd-ionicon'

import { useLucid } from 'app/hooks/useLucid'
import { notifyError, notifySuccess } from 'app/helper'
import { useOracles } from 'app/hooks/useOracles'
import { useSelector } from 'react-redux'
import { AppState } from 'app/model'
import configs from 'app/configs'
import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'
import { useLucidOracles } from 'app/hooks/useLucidOracles'
import { usePoolData } from 'app/hooks/pool/usePoolData'
import { GENERAL_NORMALIZED_NUMBER } from 'app/constants'

type BuyProps = {
  poolAddress: string
}

const {
  sol: { baseMint },
} = configs

const Buy = ({ poolAddress }: BuyProps) => {
  const [amount, setAmount] = useState('0')
  const [receive, setReceive] = useState('0')
  const [loading, setLoading] = useState(false)
  const pools = useSelector((state: AppState) => state.pools)
  const { mint } = pools[poolAddress]
  const mintAddress = mint.toBase58()
  const lucid = useLucid()
  const { decimalizeMintAmount, undecimalizeMintAmount } = useOracles()
  const { calcOutGivenInSwap } = useLucidOracles()
  const poolData = usePoolData(poolAddress)

  const { balance } = useAccountBalanceByMintAddress(baseMint)

  const onBuy = async () => {
    setLoading(true)
    try {
      console.log(amount, 'so luong amount')
      const amountBN = await decimalizeMintAmount(amount, baseMint)
      const { txId } = await lucid.buy(poolAddress, amountBN, amountBN)
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  const onSell = async () => {
    setLoading(true)
    try {
      const amountBN = await decimalizeMintAmount(amount, baseMint)
      const { txId } = await lucid.sell(poolAddress, amountBN)
      return notifySuccess('Deposited', txId)
    } catch (error) {
      notifyError(error)
    } finally {
      setLoading(false)
    }
  }

  const onChangeAmount = async (amount: string) => {
    setAmount(amount)
    const { balance, stableBalance, fee, stableMint, mint } = poolData
    const balanceNum = await undecimalizeMintAmount(balance, mint)
    const stableNum = await undecimalizeMintAmount(stableBalance, stableMint)
    // temp to get decimal
    const numSwapFee = await undecimalizeMintAmount(fee, stableMint)
    const receiveAmount = calcOutGivenInSwap(
      Number(amount),
      Number(balanceNum),
      Number(stableNum),
      Number(numSwapFee),
    )
    setReceive(`${receiveAmount}`)
  }

  return (
    <Row gutter={[12, 12]} justify="center">
      <Col span={24}>
        <MintInput
          amount={amount}
          selectedMint={baseMint}
          onChangeAmount={onChangeAmount}
          ratioButton={
            <Button
              type="primary"
              onClick={() => setAmount(balance.toString())}
            >
              Max
            </Button>
          }
        />
      </Col>
      <Col>
        <Button
          className="btn-switch-type"
          size="small"
          icon={
            <IonIcon style={{ color: '#000000' }} name="git-compare-outline" />
          }
        />
      </Col>
      <Col span={24}>
        <MintInput
          amount={receive}
          selectedMint={mintAddress}
          onChangeAmount={setReceive}
        />
      </Col>
      <Col span={24}>
        <Button loading={loading} type="primary" block onClick={onBuy}>
          Swap
        </Button>
      </Col>
    </Row>
  )
}

export default Buy
