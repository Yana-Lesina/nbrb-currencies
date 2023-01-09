import React from "react"
import { RootState } from "../../redux-store/store"
import { useSelector } from "react-redux"

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
  DayInput,
  InputBlock,
  OptionItem,
  ErrorHandler,
  ActionButton,
} from "./styles"
import { getCurrenciesToDate } from "../../axiosFuncs"
import { setZero } from "../../helpers/stringFuncs"

const CurrenciesToDate = () => {
  const url = useSelector((state: RootState) => state.requestURL.value)
  const currenciesData = useSelector((state: RootState) => state.currencies.valueToDate)
  const monthsArray = useSelector((state: RootState) => state.dateParams.months)
  const yearsArray = useSelector((state: RootState) => state.dateParams.years)

  const [errorMessage, setErrorMessage] = React.useState("")
  const [targetDate, setTargetDate] = React.useState<Date>(new Date())
  const [day, setDay] = React.useState("")
  const [month, setMonth] = React.useState("")
  const [year, setYear] = React.useState("")

  // functionality============================================
  React.useEffect(() => {
    getCurrenciesToDate(`${url}//rates?periodicity=0`)
  }, [])

  const handleClick = () => {
    const targetDateAttempt = new Date(+year, +month - 1, +day)
    // +month - 1 потому, что отсчёт в объекте Date начинается с нуля
    // => нужно убрать из счёта дефолтный "пустой" option

    if (
      `${targetDateAttempt.getDate()}.${
        targetDateAttempt.getMonth() + 1
      }.${targetDateAttempt.getFullYear()}` === `${day}.${month}.${year}`
    ) {
      getCurrenciesToDate(`${url}/rates?ondate=${year}-${month}-${day}&periodicity=0`)
      setTargetDate(targetDateAttempt)
      setErrorMessage("")
    } else {
      setErrorMessage("Неверный ввод даты")
    }
  }

  return (
    <Wrapper>
      <CurrenciesTable>
        <Caption>
          КУРС ВАЛЮТ НА{" "}
          {`${setZero(String(targetDate.getDate()))}.${setZero(
            String(targetDate.getMonth() + 1),
          )}.${targetDate.getFullYear()}`}
        </Caption>
        <TableHead>
          <TableRow>
            <TableHeader>Код</TableHeader>
            <TableHeader>Название</TableHeader>
            <TableHeader>Курс</TableHeader>
            <TableHeader>Единиц</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {currenciesData.map((item) => {
            return (
              <TableRow key={item.Cur_ID}>
                <Cell>{item.Cur_Abbreviation}</Cell>
                <Cell>{item.Cur_Name}</Cell>
                <Cell>{item.Cur_OfficialRate}</Cell>
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
          <DayInput
            id='day'
            type='text'
            onChange={(event: any) => setDay(event.target.value)}
          ></DayInput>
        </InputBlock>
        <InputBlock>
          <Label htmlFor='month'>Месяц</Label>
          <Select
            id='month'
            onChange={(event: any) => {
              setMonth(event.target.selectedIndex)
            }}
          >
            {monthsArray.map((month, id) => (
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
            {yearsArray
              .map((item) => {
                return <OptionItem key={item}>{item}</OptionItem>
              })
              .reverse()}
          </Select>
        </InputBlock>
        <ActionButton onClick={handleClick}>Узнать курс на дату</ActionButton>
        <ErrorHandler>{errorMessage}</ErrorHandler>
      </DateInputsContainer>
    </Wrapper>
  )
}

export default CurrenciesToDate
