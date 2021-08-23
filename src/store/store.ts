import { configureStore } from '@reduxjs/toolkit'
import { Api } from '../api/api'
import * as reducers from './reducers'

export const store = configureStore({
  reducer: {
    ...reducers,
    [Api.reducerPath]: Api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
