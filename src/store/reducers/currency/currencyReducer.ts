import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Data = {
  currencyCodeA: number
  currencyCodeB: number
  date: number
  rateSell: number
  rateBuy: number
  rateCross: number
}

type InitState = {
  data: Data[]
  isLoading: boolean
  isSuccess: boolean
}

const initialState: InitState = {
  data: [],
  isLoading: false,
  isSuccess: false
}

const currency = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    getCurrency: (state, action: PayloadAction<{ data: Data[] }>) => {
      state.data = action.payload.data.filter((el) => !!el.rateSell)
    }
  }
})

const { actions, reducer } = currency

export const { getCurrency } = actions

export default reducer
