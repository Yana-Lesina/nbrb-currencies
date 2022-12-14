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
  TableHead,
  TableBody,
  TableFooter,
  Label,
  Select,
  Input,
  InputBlock,
  OptionItem,
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
        <TableHead>
          <TableRow>
            <TableHeader>Название</TableHeader>
            <TableHeader>Курс</TableHeader>
            <TableHeader>Код</TableHeader>
            <TableHeader>Единиц</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
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
        </TableBody>
        <TableFooter>
          <TableRow>
            <Cell>
              Данные взяты с официального сайта{" "}
              <a href='https://www.nbrb.by/apihelp/exrates'>nbrb.by</a>
            </Cell>
          </TableRow>
        </TableFooter>
      </CurrenciesTable>

      <DateInputsContainer>
        <InputBlock>
          <Label htmlFor='day'>День</Label>
          <Input id='day' type='text'></Input>
        </InputBlock>
        <InputBlock>
          <Label htmlFor='month'>Месяц</Label>
          <Select id='month'>
            {[
              "Январь",
              "Февраль",
              "Март",
              "Апрель",
              "Май",
              "Июнь",
              "Июль",
              "Август",
              "Сентябрь",
              "Октябрь",
              "Ноябрь",
              "Декабрь",
            ].map((month, id) => (
              <OptionItem key={id} value={month.toLowerCase()}>
                {month}
              </OptionItem>
            ))}
          </Select>
        </InputBlock>
        <InputBlock>
          <Label htmlFor='year'>Год</Label>
          <Select id='year'>
            <OptionItem>2022</OptionItem>
            <OptionItem>2021</OptionItem>
            <OptionItem>2020</OptionItem>
          </Select>
        </InputBlock>
      </DateInputsContainer>
    </Wrapper>
  )
}

export default CurrenciesToDate
