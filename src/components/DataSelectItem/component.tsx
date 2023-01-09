import React from "react"
import { DateSelect, OptionItem } from "./styles"

interface IDataSelectItem {
  handleChange: any
}

const DataSelectItem: React.FC<IDataSelectItem> = ({ handleChange }) => {
  return (
    <>
      <DateSelect id='day' onChange={handleChange}>
        <OptionItem></OptionItem>
        {Array(30)
          .fill(0)
          .map((_, id) => (
            <OptionItem key={id}>{id + 1}</OptionItem>
          ))}
      </DateSelect>
      <DateSelect id='month' onChange={handleChange}>
        <OptionItem></OptionItem>
        {Array(12)
          .fill(0)
          .map((_, id) => (
            <OptionItem key={id}>{id + 1}</OptionItem>
          ))}
      </DateSelect>
      <DateSelect id='year' onChange={handleChange}>
        <OptionItem></OptionItem>
        {Array(new Date().getFullYear() - 2016 + 1)
          .fill(0)
          .map((_, id) => (
            <OptionItem key={id}>{2016 + id}</OptionItem>
          ))}
      </DateSelect>
    </>
  )
}

export default DataSelectItem
