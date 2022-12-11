import { HeaderWrapper, HeaderList, HeaderItem } from "./styles"

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderList>
        <HeaderItem>CurrenciesToDate</HeaderItem>
        <HeaderItem>CurrencyDynamic</HeaderItem>
        <HeaderItem>Converter</HeaderItem>
      </HeaderList>
    </HeaderWrapper>
  )
}

export default Header
