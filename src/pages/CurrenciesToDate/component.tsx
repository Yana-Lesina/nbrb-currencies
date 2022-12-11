import React from "react"
import axios from "axios"

import { Wrapper, CurrencyItem } from "./styles"

type currencyType = {
  Cur_ID: number
  Date: string
  Cur_Abbreviation: string
  Cur_Scale: number
  Cur_Name: string
  Cur_OfficialRate: number
}

const CurrenciesToDate = () => {
  const url = "https://www.nbrb.by/api/exrates" // /rates?periodicity=0"
  const [currenciesData, setCurrenciesData] = React.useState<currencyType[]>([])

  React.useEffect(() => {
    getAllCurrencies()
  }, [])

  const getAllCurrencies = () => {
    axios
      .get(`${url}//rates?periodicity=0`)
      .then((response) => {
        const data = response.data
        console.log("data: ", data)
        setCurrenciesData(data)
      })
      .catch((error) => {
        console.error(`Error: ${error}`)
      })
  }
  return (
    <Wrapper>
      {currenciesData.map((item) => {
        return <CurrencyItem key={item.Cur_ID}>{item.Cur_Name}</CurrencyItem>
      })}
    </Wrapper>
  )
}

export default CurrenciesToDate
