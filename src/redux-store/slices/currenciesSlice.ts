import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { currencyToDateType, valueDynamicType } from "../../types"

type stateType = {
  valueToDate: currencyToDateType[]
  valueDynamic: valueDynamicType[]
  selectAttrs: {
    CurID: number
    CurAbbreviation: string
  }[]
}

const initialState: stateType = {
  valueToDate: [],
  valueDynamic: [],
  selectAttrs: [],
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

    setSelectAttrs: (
      state: stateType,
      action: PayloadAction<
        {
          CurID: number
          CurAbbreviation: string
        }[]
      >,
    ) => {
      state.selectAttrs = [{ CurID: 933, CurAbbreviation: "BYN" }, ...action.payload]
    },
  },
})

export const { setCurrenciesToDate, setCurrencyDynamic, setSelectAttrs } = currenciesSlice.actions
export default currenciesSlice.reducer
