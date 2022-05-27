import { useCallback, useEffect, useState } from 'react'

import { useOracles } from 'app/hooks/useOracles'
import { usePoolData } from './usePoolData'

const LPT_DECIMALS = 9
const STABLE_DECIMALS = 9

export const usePoolPrices = (poolAddress: string) => {
  const { balance, stableBalance, lptSupply, mint } = usePoolData(poolAddress)
  const { undecimalize, undecimalizeMintAmount } = useOracles()
  const [poolPrices, setPoolPrices] = useState({
    mintPrice: 0,
    lptPrice: 0,
  })

  const calcPrices = useCallback(async () => {
    const mintPrice = balance.toNumber() / stableBalance.toNumber()
    const balanceAmount = undecimalizeMintAmount(balance, mint)
    const stableAmount = undecimalize(balance, STABLE_DECIMALS)
    const lptRatio = 1 / Number(undecimalize(lptSupply, LPT_DECIMALS))
    const mintPerLpt = lptRatio * Number(balanceAmount)
    const stablePerLpt = lptRatio * Number(stableAmount)
    return setPoolPrices({
      mintPrice,
      lptPrice: mintPerLpt * mintPrice + stablePerLpt,
    })
  }, [
    balance,
    lptSupply,
    mint,
    stableBalance,
    undecimalize,
    undecimalizeMintAmount,
  ])

  useEffect(() => {
    calcPrices()
  }, [calcPrices])

  return poolPrices
}
