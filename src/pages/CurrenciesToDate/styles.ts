import styled from "styled-components"

export const Wrapper = styled.section`
  width: 75vw;
  margin: 0 auto;
  padding: 2vw 5vw;
  border: 1px solid gray;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
// table styles======================================
export const CurrenciesTable = styled.table`
  display: block;
  border-collapse: collapse;
  margin-right: 20px;
`
export const TableHead = styled.thead``
export const TableBody = styled.tbody``
export const TableFooter = styled.tfoot``

export const Caption = styled.caption`
  text-align: left;
  color: #000;
  font-size: 16px;
`
export const TableRow = styled.tr`
  border-bottom: 0.5px solid black;
  &:hover {
    background-color: grey;
    color: #fff;
    transition: 0.35s;
  }
  cursor: pointer;
`
export const TableHeader = styled.th`
  font-size: 16px;
  text-align: left;
`
export const Cell = styled.td``
// inputs styles======================================
export const DateInputsContainer = styled.div`
  width: 40%;
  height: auto;
  text-align: center;
  // border: 1px solid grey;
  border-radius: 10px;
  // margin: 0 auto;
  padding: 4rem 3rem;
  height: auto;
`
export const InputBlock = styled.div``
export const DayInput = styled.input.attrs({ type: "text" })`
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-color: white;
  border: thin solid green;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  margin-bottom: 15px;
`
export const Label = styled.label`
  display: inline-block;
  width: 100%;
  color: green;
  text-align: left;
  // margin-left: 1em;
`
export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  display: inline-block;
  width: 100%;
  padding: 0.5em 3.5em 0.5em 1em;
  margin-bottom: 15px;

  background-color: white;
  border: thin solid green;
  border-radius: 4px;

  font: inherit;
  line-height: 1.5em;

  // styling arrow =========================
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%), radial-gradient(#ddd 70%, transparent 72%);
  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),
    calc(100% - 0.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
  background-repeat: no-repeat;

  &:focus {
    background-image: linear-gradient(45deg, white 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, white 50%),
      radial-gradient(gray 70%, transparent 72%);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 0.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;
  }
`
export const OptionItem = styled.option``

export const ActionButton = styled.button`
  // cursor: pointer;
  // appearance: none;
  // -webkit-appearance: none;
  // -moz-appearance: none;
  // background-color: transparent;
  // border: none;

  background-color: #4caf50; /* Green */
  border: none;
  border-radius: 10px;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid #4caf50;
  }
`

export const ErrorHandler = styled.div`
  color: red;
`
