import {
  Fragment,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useDispatch } from 'react-redux'

import { upsetPool, upsetPools } from 'app/model/pools.controller'
import { AppDispatch } from 'app/model'
import { useLucid } from 'app/hooks/useLucid'

// Watch id
let watchId = 0

const PoolWatcher: FunctionComponent = (props) => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch<AppDispatch>()
  const lucid = useLucid()

  // First-time fetching
  const fetchData = useCallback(async () => {
    try {
      console.log('Call Pools')
      const pools = await lucid.getPools()
      await dispatch(upsetPools(pools)).unwrap()
    } catch (er) {
      return window.notify({
        type: 'error',
        description: 'Cannot fetch data of pools',
      })
    } finally {
      setLoading(false)
    }
  }, [dispatch, lucid])

  // Watch account changes
  const watchData = useCallback(async () => {
    // if (watchId) return console.warn('Already watched')
    // watchId = window.balansol.watch((er: string | null, re) => {
    //   if (er) return console.error(er)
    //   if (re) return dispatch(upsetPool({ address: re.address, data: re.data }))
    // }, [])
  }, [dispatch])

  useEffect(() => {
    fetchData()
    watchData()
    // Unwatch (cancel socket)
    // return () => {
    //   ;(async () => {
    //     try {
    //       await window.balansol.unwatch(watchId)
    //     } catch (er) {}
    //   })()
    //   watchId = 0
    //}
  }, [fetchData, watchData])

  if (loading) return <div>Loading</div>
  return <Fragment>{props.children}</Fragment>
}

export default PoolWatcher
