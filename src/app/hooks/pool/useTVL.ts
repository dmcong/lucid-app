import { usePoolAmounts } from './usePoolAmounts'
import { usePoolPrices } from './usePoolPrices'

const useTVL = (poolAddress: string) => {
  const poolAmounts = usePoolAmounts(poolAddress)
  const poolPrices = usePoolPrices(poolAddress)
  return poolAmounts.amount * poolPrices.mintPrice + poolAmounts.stableAmount
}
export default useTVL
