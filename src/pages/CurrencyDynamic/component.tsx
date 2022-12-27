import React from "react"
import LineChart from "../../components/LineChart"
import { Data } from "../../Data"
import { Header2, Wrapper } from "./styles"

const CurrencyDynamic = () => {
  const [chartData, setChartData] = React.useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  })
  return (
    <Wrapper>
      <Header2>Статистика валюты </Header2>
      <LineChart chartData={chartData} />
    </Wrapper>
  )
}

export default CurrencyDynamic
