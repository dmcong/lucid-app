import { BN } from 'bn.js'

const useAPR = (poolAddress: string) => {
  return new BN(Math.floor(Math.random() * 100))
}

export default useAPR
