import React from "react"
import { useSelector } from "react-redux"
import { getCurrenciesToDate } from "../../axiosFuncs"

import axios from "axios"

import DataSelectItem from "../../components/DataSelectItem"
import LineChart from "../../components/LineChart"
import { RootState } from "../../redux-store/store"
import {
  Header2,
  CurrencySelect,
  OptionItem,
  Wrapper,
  ControlsBlock,
  GetDynamicsButton,
  AlertBlock,
} from "./styles"
import { setZero } from "../../helpers/stringFuncs"

type TDate = {
  day: string
  month: string
  year: string
}

type TCurrency = {
  currencyID: number | undefined
  startDate: Partial<TDate> | undefined
  endDate: Partial<TDate> | undefined
}

type TDynamicData = {
  Cur_ID: number
  Date: string
  Cur_OfficialRate: string
}

const CurrencyDynamic = () => {
  const [currencyID, setCurrencyID] = React.useState<number>()
  const [startDate, setStartDate] = React.useState<Partial<TDate>>()
  const [endDate, setEndDate] = React.useState<Partial<TDate>>()
  const [currencyDynamicData, setCurrencyDynamicData] = React.useState<TDynamicData[]>(
    [] as TDynamicData[],
  )
  const [errorMessage, setErrorMessage] = React.useState<string>("")

  const url = useSelector((state: RootState) => state.requestURL.value)
  const currencyToDate = useSelector((state: RootState) => state.currencies.valueToDate)

  const [chartData, setChartData] = React.useState({
    labels: currencyDynamicData?.map((data) => {
      const date = new Date(String(data.Date))
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    }),
    datasets: [
      {
        label: "Курс",
        data: currencyDynamicData?.map((data) => data.Cur_OfficialRate),
        backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  })

  // ===================================
  React.useEffect(() => {
    getCurrenciesToDate(`${url}//rates?periodicity=0`)
  }, [])

  React.useEffect(() => {
    setChartData({
      labels: currencyDynamicData?.map((data) => {
        const date = new Date(String(data.Date))
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
      }),
      datasets: [
        {
          label: "Курс",
          data: currencyDynamicData?.map((data) => data.Cur_OfficialRate),
          backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    })
  }, [currencyDynamicData])

  function findCurrencyID(targetAbbreviation: string) {
    return currencyToDate.find((item) => item.Cur_Abbreviation === targetAbbreviation)
  }

  const handleGetDynamicsButton = ({ currencyID, startDate, endDate }: TCurrency) => {
    axios
      .get(
        `${url}/rates/dynamics/${currencyID}?startDate=${startDate?.year}-${startDate?.month}-${startDate?.day}&endDate=${endDate?.year}-${endDate?.month}-${endDate?.day}`,
      )
      .then((response) => {
        const data = response.data
        setCurrencyDynamicData(data)

        if (!data.length) {
          setErrorMessage(
            `Данные по запрашиваемой валюте на период ${setZero(String(startDate?.day))}.${setZero(
              String(startDate?.month),
            )}.${startDate?.year} - ${setZero(String(endDate?.day))}.${setZero(
              String(endDate?.month),
            )}.${endDate?.year} отсутствуют`,
          )
        } else {
          setErrorMessage("")
        }

        return data
      })
      .catch((error) => {
        setErrorMessage(`Неполный или неправильный ввод данных`)
        console.error(`Error: ${error}`)
      })
  }

  return (
    <Wrapper>
      <Header2>
        Статистика валюты{" "}
        <CurrencySelect
          onChange={(event: any) => {
            const currencyAbbreviation = event.target.value.slice(0, 3)
            const newCurrency = findCurrencyID(currencyAbbreviation)

            if (newCurrency) {
              setCurrencyID(newCurrency?.Cur_ID)
            }
          }}
        >
          <OptionItem></OptionItem>
          {currencyToDate.map((item) => (
            <OptionItem key={item.Cur_ID}>{`${item.Cur_Abbreviation} ${item.Cur_Name}`}</OptionItem>
          ))}
        </CurrencySelect>{" "}
        относительно BYN
      </Header2>
      <ControlsBlock>
        c{" "}
        <DataSelectItem
          handleChange={(e: any) => {
            if (e.target.id === "day") {
              setStartDate({ ...startDate, day: e.target.value })
            } else if (e.target.id === "month") {
              setStartDate({ ...startDate, month: e.target.value })
            } else if (e.target.id === "year") {
              setStartDate({ ...startDate, year: e.target.value })
            }
          }}
        />{" "}
        по{" "}
        <DataSelectItem
          handleChange={(e: any) => {
            if (e.target.id === "day") {
              setEndDate({ ...endDate, day: e.target.value })
            } else if (e.target.id === "month") {
              setEndDate({ ...endDate, month: e.target.value })
            } else if (e.target.id === "year") {
              setEndDate({ ...endDate, year: e.target.value })
            }
          }}
        />
      </ControlsBlock>
      <GetDynamicsButton
        onClick={() =>
          handleGetDynamicsButton({
            currencyID: currencyID,
            startDate: startDate,
            endDate: endDate,
          })
        }
      >
        Узнать динамику курса
      </GetDynamicsButton>

      {currencyDynamicData.length ? (
        <LineChart chartData={chartData} />
      ) : (
        (!errorMessage && <AlertBlock>Введите данные для отображения статистики</AlertBlock>) ||
        (errorMessage && <AlertBlock>{errorMessage}</AlertBlock>)
      )}
    </Wrapper>
  )
}

export default CurrencyDynamic
