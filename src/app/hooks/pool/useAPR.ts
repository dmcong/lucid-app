import { usePoolData } from './usePoolData'
import { usePoolDay } from './usePoolDay'

const useAPR = (poolAddress: string) => {
  const pool = usePoolData(poolAddress)
  const day = usePoolDay(poolAddress)

  const feePerDay = pool.totalLptFee.toNumber() / day
  const roi = feePerDay / pool.lptSupply.toNumber()

  return Number(Number(roi * 365).toFixed(6))
}
export default useAPR
