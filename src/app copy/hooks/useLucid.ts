import { useWallet } from '@senhub/providers'
import React, { useMemo } from 'react'

export const useLucid = () => {
  const { wallet } = useWallet()
  const privder = useMemo(() => {}, [])
  return null
}
