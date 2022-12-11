import React from "react"
import axios from "axios"

type currencyType = {
  Cur_ID: number
  Date: string
  Cur_Abbreviation: string
  Cur_Scale: number
  Cur_Name: string
  Cur_OfficialRate: number
}

const ContentContainer = () => {
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
        setCurrenciesData(data)
      })
      .catch((error) => {
        console.error(`Error: ${error}`)
      })
  }
  return (
    <div>
      <ul>
        {currenciesData.map((item) => {
          return <li key={item.Cur_ID}>{item.Cur_Name}</li>
        })}
      </ul>
    </div>
  )
}

export default ContentContainer
