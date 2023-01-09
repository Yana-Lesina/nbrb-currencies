import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux-store/store"
import { TCurrencyParams } from "../../types"
import { ControlsWrapper, Input, Label, OptionItem, Select } from "./styles"

type TCurrencyControls = {
  componentAttrs: {
    labelText: string
    currencyParams: TCurrencyParams
    disabled?: true | undefined
  }
  handleInputChange: any
  handleDropdownChange: any
}
const CurrencyControls: React.FC<TCurrencyControls> = ({
  componentAttrs,
  handleInputChange,
  handleDropdownChange,
}) => {
  const currencyLabels = useSelector((state: RootState) => state.currencies.selectAttrs)
  const inputValue = componentAttrs?.currencyParams.amountValue
  const selectValue = componentAttrs?.currencyParams?.optionValue?.CurAbbreviation

  return (
    <ControlsWrapper>
      <Label>{componentAttrs?.labelText}</Label>
      <Input
        disabled={componentAttrs.disabled ? true : false}
        value={inputValue}
        onChange={(e: any) => handleInputChange(e.target.value)}
        placeholder={"0"}
      />
      <Select
        value={selectValue}
        onChange={(e: any) => {
          return handleDropdownChange({
            CurID: e.target.options[e.target.selectedIndex].id,
            CurAbbreviation: e.target.value,
          })
        }}
      >
        {currencyLabels?.map((item) => (
          <OptionItem key={item.CurID} id={String(item.CurID)}>
            {item.CurAbbreviation}
          </OptionItem>
        ))}
      </Select>
    </ControlsWrapper>
  )
}

export default CurrencyControls
