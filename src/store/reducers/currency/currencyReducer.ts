import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Data = {
  currencyCodeA: number
  currencyCodeB: number
  date: number
  rateSell: number
  rateBuy: number
  rateCross: number
}

type Currency = {
  code: number
  rate: number
}

type InitState = {
  data: Data[]
  currencies: Currency[]
  mainCurrencies: Currency[]
  currencyFrom: Currency | null
  isLoading: boolean
  isSuccess: boolean
}

const initialState: InitState = {
  data: [],
  currencies: [],
  mainCurrencies: [],
  currencyFrom: null,
  isLoading: false,
  isSuccess: false
}

const currency = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    getCurrency: (state, action: PayloadAction<{ data: Data[] }>) => {
      const listToUAH = action.payload.data.filter((el) => el.currencyCodeB === 980)
      state.data = listToUAH
      state.currencies = listToUAH.map((el) => ({
        code: el.currencyCodeA,
        rate: el.rateCross || el.rateSell
      }))
      state.mainCurrencies = listToUAH.slice(0, 4).map((el) => ({
        code: el.currencyCodeA,
        rate: el.rateCross || el.rateSell
      }))
    }
  }
})

const { actions, reducer } = currency

export const { getCurrency } = actions

export default reducer
