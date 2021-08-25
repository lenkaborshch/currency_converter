import React, { useEffect } from 'react'
import './App.css'
import { useGetCurrencyQuery } from './api/api'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrency } from './store/reducers/currency/currencyReducer'
import { RootState } from './store/store'
import SelectCountry from './components/SelectCountry'

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
          <SelectCountry />
        </div>
      )}
    </div>
  )
}

export default App
