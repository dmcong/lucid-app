import { BN } from 'bn.js'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { AppState } from 'app/model'
import useMintDecimals from 'shared/hooks/useMintDecimals'

const useTVL = (poolAddress: string) => {
  const pools = useSelector((state: AppState) => state.pools)
  const { stableBalance, stableMint } = pools[poolAddress]
  const decimal = useMintDecimals(stableMint.toBase58()) || 0

  const tlv = useMemo(() => {
    if (!stableBalance) return new BN(0)
    return stableBalance.mul(new BN(2))
  }, [stableBalance])

  return tlv.div(new BN(10 ** decimal))
}

export default useTVL
