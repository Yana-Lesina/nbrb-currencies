import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { currencyToDateType, valueDynamicType } from "../../types"

type stateType = { valueToDate: currencyToDateType[]; valueDynamic: valueDynamicType[] }

const initialState: stateType = {
  valueToDate: [],
  valueDynamic: [],
}

const currenciesSlice = createSlice({
  name: "currenciesData",
  initialState,
  reducers: {
    setCurrenciesToDate: (state: stateType, action: PayloadAction<currencyToDateType[]>) => {
      state.valueToDate = action.payload
    },
    setCurrencyDynamic: (state: stateType, action: PayloadAction<valueDynamicType[]>) => {
      state.valueDynamic = action.payload
    },
  },
})

export const { setCurrenciesToDate, setCurrencyDynamic } = currenciesSlice.actions
export default currenciesSlice.reducer
