import React, { useEffect } from 'react'
import './App.css'
import { useGetCurrencyQuery } from './api/api'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrency } from './store/reducers/currency/currencyReducer'
import { RootState } from './store/store'

const App = () => {
  const { data, isLoading, isSuccess } = useGetCurrencyQuery('fd')
  const dispatch = useDispatch()
  const dat = useSelector((state: RootState) => state.currency.data)

  useEffect(() => {
    data && dispatch(getCurrency({ data }))
  }, [data, dispatch])

  return (
    <div className="App">
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div>
          {dat?.map((curr: { currencyCodeA: number }, index: number) => {
            return <div key={index}>{curr.currencyCodeA}</div>
          })}
        </div>
      )}
    </div>
  )
}

export default App
