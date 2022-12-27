import { configureStore } from "@reduxjs/toolkit"
import currenciesSlice from "./slices/currenciesSlice"
import dateSlice from "./slices/dateSlice"
import urlSlice from "./slices/urlSlice"

export const store = configureStore({
  reducer: {
    requestURL: urlSlice,
    dateParams: dateSlice,
    currencies: currenciesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
