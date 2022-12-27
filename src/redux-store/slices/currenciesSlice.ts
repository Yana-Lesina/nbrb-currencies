import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { currencyType } from "../../types"

type stateType = { valueToDate: currencyType[] }

const initialState: stateType = {
  valueToDate: [],
}

const currenciesSlice = createSlice({
  name: "currenciesData",
  initialState,
  reducers: {
    setCurrenciesToDate: (state: stateType, action: PayloadAction<currencyType[]>) => {
      state.valueToDate = action.payload
    },
  },
})

export const { setCurrenciesToDate } = currenciesSlice.actions
export default currenciesSlice.reducer
