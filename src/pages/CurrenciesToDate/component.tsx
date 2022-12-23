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
  ActionButton,
  ErrorHandler,
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
  const url = "https://www.nbrb.by/api/exrates"
  const [currenciesData, setCurrenciesData] = React.useState<currencyType[]>([])
  const [targetDate, setTargetDate] = React.useState<Date>(new Date())
  const [day, setDay] = React.useState("")
  const [month, setMonth] = React.useState("")
  const [year, setYear] = React.useState("")
  const [errorMessage, setErrorMessage] = React.useState("")

  React.useEffect(() => {
    getAllCurrencies(`${url}//rates?periodicity=0`)
  }, [])

  const getAllCurrencies = (requestPath: string) => {
    axios
      .get(requestPath)
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
        <Caption>КУРС ВАЛЮТ НА {targetDate?.toLocaleDateString().replace(/\//g, ".")}</Caption>
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
          <Input id='day' type='text' onChange={(event: any) => setDay(event.target.value)}></Input>
        </InputBlock>
        <InputBlock>
          <Label htmlFor='month'>Месяц</Label>
          <Select
            id='month'
            onChange={(event: any) => {
              setMonth(event.target.selectedIndex)
            }}
          >
            {[
              "",
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
          <Select id='year' onChange={(event: any) => setYear(event.target.value)}>
            <OptionItem></OptionItem>
            <OptionItem>2022</OptionItem>
            <OptionItem>2021</OptionItem>
            <OptionItem>2020</OptionItem>
          </Select>
        </InputBlock>
        <ActionButton
          onClick={() => {
            const targetDateAttempt = new Date(+year, +month - 1, +day)
            // +month - 1 потому, что отсчёт в объекте Date начинается с нуля
            // => нужно убрать из счёта дефолтный "пустой" option

            if (targetDateAttempt.toLocaleDateString() === `${month}/${day}/${year}`) {
              getAllCurrencies(`${url}/rates?ondate=${year}-${month}-${day}&periodicity=0`)
              setTargetDate(targetDateAttempt)
              setErrorMessage("")
            } else {
              setErrorMessage("Неверный ввод даты")
            }
          }}
        >
          Узнать курс на дату
        </ActionButton>
        <ErrorHandler>{errorMessage}</ErrorHandler>
      </DateInputsContainer>
    </Wrapper>
  )
}

export default CurrenciesToDate
