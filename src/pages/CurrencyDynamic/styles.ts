import styled from "styled-components"
import TemplateButton from "../../components/TemplateButton"

export const Wrapper = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  margin: 0 auto;
  width: 60vw;
  text-align: center;
`
export const Header2 = styled.h2``

export const ControlsBlock = styled.p``

export const CurrencySelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  display: inline-block;
  padding: 0.1em 1.5em 0.1em 1em;
  background-color: white;
  border: thin solid green;
  border-radius: 4px;

  line-height: 2.5em;

  // styling arrow =========================
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%), radial-gradient(#ddd 70%, transparent 72%);
  background-position: calc(100% - 20px) calc(1em + 4px), calc(100% - 15px) calc(1em + 4px),
    calc(100% - 0.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 2em 1.9em;
  background-repeat: no-repeat;

  &:focus {
    background-image: linear-gradient(45deg, white 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, white 50%),
      radial-gradient(gray 70%, transparent 72%);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 0.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 2em 1.9em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;
  }
`
export const OptionItem = styled.option``

export const GetDynamicsButton = styled(TemplateButton)``

export const AlertBlock = styled.p`
  color: #692f18;
`
