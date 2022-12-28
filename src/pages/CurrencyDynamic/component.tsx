import { stat } from "fs"
import React from "react"
import { useSelector } from "react-redux"
import { getCurrencyDynamic } from "../../axiosFuncs"
import LineChart from "../../components/LineChart"
import { RootState } from "../../redux-store/store"
import { Header2, Wrapper } from "./styles"

const CurrencyDynamic = () => {
  const url = useSelector((state: RootState) => state.requestURL.value)
  const currencyDynamicData = useSelector((state: RootState) => state.currencies.valueDynamic)
  const [chartData, setChartData] = React.useState({
    labels: currencyDynamicData.map((data) => {
      const date = new Date(String(data.Date))
      return `${date.getDate()}.${date.getMonth()}`
    }),
    datasets: [
      {
        label: "Курс",
        data: currencyDynamicData.map((data) => data.Cur_OfficialRate),
        backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  })
  // ==========
  React.useEffect(() => {
    getCurrencyDynamic(`${url}/rates/dynamics/298?startDate=2016-7-1&endDate=2016-12-31`)
  }, [])

  return (
    <Wrapper>
      <Header2>Статистика валюты </Header2>
      <LineChart chartData={chartData} />
    </Wrapper>
  )
}

export default CurrencyDynamic
