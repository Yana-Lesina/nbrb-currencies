import axios from "axios"
import { store } from "./redux-store/store"
import { setCurrenciesToDate, setCurrencyDynamic } from "./redux-store/slices/currenciesSlice"

export const getCurrenciesToDate = (requestPath: string) => {
  axios
    .get(requestPath)
    .then((response) => {
      const data = response.data
      store.dispatch(setCurrenciesToDate(data))
    })
    .catch((error) => {
      console.error(`Error: ${error}`)
    })
}

export const getCurrencyDynamic = (requestPath: string) => {
  axios
    .get(requestPath)
    .then((response) => {
      const data = response.data
      store.dispatch(setCurrencyDynamic(data))
    })
    .catch((error) => {
      console.error(`Error: ${error}`)
    })
}
