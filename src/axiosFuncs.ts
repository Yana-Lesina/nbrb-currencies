import axios from "axios"
import { store } from "./redux-store/store"
import { setCurrenciesToDate, setSelectAttrs } from "./redux-store/slices/currenciesSlice"
import { currencyToDateType } from "./types"

export const getCurrenciesToDate = (requestPath: string) => {
  axios
    .get(requestPath)
    .then((response) => {
      const data = response.data
      store.dispatch(setCurrenciesToDate(data))

      const selectAttrs = data.map((item: currencyToDateType) => {
        return { CurID: item.Cur_ID, CurAbbreviation: item.Cur_Abbreviation }
      })

      store.dispatch(setSelectAttrs(selectAttrs))
    })
    .catch((error) => {
      console.error(`Error: ${error}`)
    })
}
