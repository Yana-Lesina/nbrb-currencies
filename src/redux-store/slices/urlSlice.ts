import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: "https://www.nbrb.by/api/exrates",
}

const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {},
})

export default urlSlice.reducer
