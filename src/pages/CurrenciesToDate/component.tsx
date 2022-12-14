import React from "react"
import axios from "axios"

import {
  Wrapper,
  CurrenciesTable,
  TableRow,
  Cell,
  TableHeader,
  Caption,
  DateInputsContainer,
} from "./styles"

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
      <CurrenciesTable>
        <Caption>КУРС ВАЛЮТ НА СЕГОДНЯ</Caption>
        <TableRow>
          <TableHeader>Название</TableHeader>
          <TableHeader>Курс</TableHeader>
          <TableHeader>Код</TableHeader>
          <TableHeader>Единиц</TableHeader>
        </TableRow>
        {currenciesData.map((item) => {
          return (
            <TableRow key={item.Cur_ID}>
              <Cell>{item.Cur_Name}</Cell>
              <Cell>{item.Cur_OfficialRate}</Cell>
              <Cell>{item.Cur_Abbreviation}</Cell>
              <Cell>{item.Cur_Scale}</Cell>
            </TableRow>
          )
        })}
      </CurrenciesTable>
      <DateInputsContainer>smth</DateInputsContainer>
    </Wrapper>
  )
}

export default CurrenciesToDate
