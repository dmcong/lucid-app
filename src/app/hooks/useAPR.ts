import { usePoolData } from './usePoolData'

const SECOND_PER_DATE = 24 * 60 * 60

const useAPR = (poolAddress: string) => {
  const pool = usePoolData(poolAddress)

  const currentTime = Math.floor(new Date().getTime() / 1000)
  const startTime = pool.startTime.toNumber()

  let date = (currentTime - startTime) / SECOND_PER_DATE
  if (date < 1) date = 1

  const feePerDay = pool.totalLptFee.toNumber() / date
  const roi = feePerDay / pool.lptSupply.toNumber()

  return Number(Number(roi * 365).toFixed(6))
}
export default useAPR
