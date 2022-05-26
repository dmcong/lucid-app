import { useMemo } from 'react'
import { useWallet } from '@senhub/providers'

import { rpc } from 'shared/runtime'
import { getAnchorProvider, LUCID_ADDRESS } from 'app/lib'
import LucidProgram from 'app/lib'

export const useLucid = (): LucidProgram => {
  const { wallet } = useWallet()

  const provider = useMemo(
    () => getAnchorProvider(rpc, wallet.address, window.sentre.wallet),
    [wallet.address],
  )

  const lucidProgram = useMemo(
    () => new LucidProgram(provider, LUCID_ADDRESS),
    [provider],
  )
  return lucidProgram
}
