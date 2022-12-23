import styled from "styled-components"

export const Wrapper = styled.section`
  width: 75vw;
  margin: 0 auto;
  padding: 2vw 5vw;
  border: 1px solid gray;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
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
  border: 1px solid #000;
  margin: 0 auto;
  height: auto;
`
export const InputBlock = styled.div``
export const Input = styled.input`
  width: 30px;
`
export const Label = styled.label``
export const Select = styled.select``
export const OptionItem = styled.option``

export const ActionButton = styled.button`
  cursor: pointer;
`

export const ErrorHandler = styled.div`
  color: red;
`
