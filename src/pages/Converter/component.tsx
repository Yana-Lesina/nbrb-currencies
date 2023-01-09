import axios from "axios"
import React from "react"
import { useSelector } from "react-redux"
import { getCurrenciesToDate } from "../../axiosFuncs"
import CurrencyControls from "../../components/CurrencyControls"
import { RootState } from "../../redux-store/store"
import { currencyToDateType, TCurrencyParams } from "../../types"
import { ConverterWrapper, HeadTitle2, ReverseButton, Wrapper } from "./styles"

type TRates = {
  rateFrom: number
  rateTo: number
}

type TOption = {
  CurID: number
  CurAbbreviation: string
}

const Converter = () => {
  const url = useSelector((state: RootState) => state.requestURL.value)
  const [exRates, setExRates] = React.useState<TRates>({} as TRates)
  const [haveCurrencyParams, setHaveCurrencyParams] = React.useState<TCurrencyParams>({
    amountValue: "",
    optionValue: {
      CurID: 933,
      CurAbbreviation: "BYN",
    },
  })
  const [buyCurrencyParams, setBuyCurrencyParams] = React.useState<TCurrencyParams>({
    amountValue: "",
    optionValue: {
      CurID: 431,
      CurAbbreviation: "USD",
    },
  })

  // ==============================
  function handleClick() {
    const memoryVar = { ...haveCurrencyParams }
    setHaveCurrencyParams({ ...buyCurrencyParams })
    setBuyCurrencyParams({
      ...memoryVar,
    })
  }

  function getExchangeRate(requestPath: string, setFunc: any) {
    axios
      .get(requestPath)
      .then((response) => {
        const data = response.data
        setFunc(data)
        return data
      })
      .catch((error) => {
        console.error(`Error: ${error}`)
      })
  }

  React.useEffect(() => {
    getCurrenciesToDate(`${url}/rates?periodicity=0`)
  }, [])

  React.useEffect(() => {
    const haveCurrID = haveCurrencyParams?.optionValue?.CurID
    const getCurrID = buyCurrencyParams?.optionValue?.CurID

    if (haveCurrID != 933) {
      getExchangeRate(`${url}/rates/${haveCurrID}`, (data: currencyToDateType) => {
        setExRates((prev) => {
          return { rateFrom: data.Cur_OfficialRate, rateTo: prev.rateTo }
        })
      })
    } else {
      setExRates((prev) => {
        return { rateFrom: 1, rateTo: prev.rateTo }
      })
    }

    if (getCurrID != 933) {
      getExchangeRate(`${url}/rates/${getCurrID}`, (data: currencyToDateType) => {
        setExRates((prev) => {
          return { rateFrom: prev.rateFrom, rateTo: data.Cur_OfficialRate }
        })
      })
    } else {
      setExRates((prev) => {
        return { rateFrom: prev.rateFrom, rateTo: 1 }
      })
    }
  }, [haveCurrencyParams, buyCurrencyParams.optionValue])

  React.useEffect(() => {
    const amountToCount = haveCurrencyParams.amountValue

    if (amountToCount !== "" && !Number.isNaN(amountToCount)) {
      const countedAmount = ((Number(amountToCount) * exRates.rateFrom) / exRates.rateTo).toFixed(2)
      setBuyCurrencyParams((prev) => {
        return { amountValue: countedAmount, optionValue: prev.optionValue }
      })
    }
  }, [exRates])

  // ==================================
  return (
    <Wrapper>
      <HeadTitle2>Currency Converter</HeadTitle2>
      <ConverterWrapper>
        <CurrencyControls
          componentAttrs={{
            labelText: "I have",
            currencyParams: haveCurrencyParams,
          }}
          handleInputChange={(newVal: string) =>
            setHaveCurrencyParams((prevState) => {
              return { amountValue: newVal, optionValue: prevState.optionValue }
            })
          }
          handleDropdownChange={(newVal: TOption) =>
            setHaveCurrencyParams((prev) => {
              return { amountValue: prev.amountValue, optionValue: newVal }
            })
          }
        ></CurrencyControls>
        <ReverseButton onClick={handleClick}>{"<-->"}</ReverseButton>
        <CurrencyControls
          componentAttrs={{
            labelText: "I want to buy",
            currencyParams: buyCurrencyParams,
            disabled: true,
          }}
          handleInputChange={(newVal: string) =>
            setBuyCurrencyParams((prevState) => {
              return { amountValue: newVal, optionValue: prevState.optionValue }
            })
          }
          handleDropdownChange={(newVal: TOption) =>
            setBuyCurrencyParams((prev) => {
              return { amountValue: prev.amountValue, optionValue: newVal }
            })
          }
        ></CurrencyControls>
      </ConverterWrapper>
    </Wrapper>
  )
}

export default Converter
