import { HeaderWrapper, HeaderList, HeaderItem, HeaderLink } from "./styles"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()

  // function handleClick(event: any) {
  //   event.preventDefault()
  //   navigate(event.target.id === "main" ? "/" : `/${event.target.id}`)
  // }

  return (
    <HeaderWrapper>
      <HeaderList>
        <HeaderItem>
          <HeaderLink to='/'>CurrenciesToDate</HeaderLink>
        </HeaderItem>
        <HeaderItem>
          <HeaderLink to='currencies-dynamic'>CurrencyDynamic</HeaderLink>
        </HeaderItem>
        <HeaderItem>
          <HeaderLink to='converter'>Converter</HeaderLink>
        </HeaderItem>
      </HeaderList>
    </HeaderWrapper>
  )
}

export default Header
