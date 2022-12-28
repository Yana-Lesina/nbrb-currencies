import React from "react"
import { Line } from "react-chartjs-2"

import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js"
Chart.register(CategoryScale)

const LineChart = ({ chartData }: any) => {
  return (
    <div className='chart-container'>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Курс RUB относительно BYN с 01.07.2016 по 31.12.2016",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  )
}

export default LineChart
