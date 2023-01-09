import styled from "styled-components"

export const ControlsWrapper = styled.div`
  text-align: left;
`

export const Label = styled.label`
  display: block;
  text-align: left;
`

export const Input = styled.input`
  border: 1px solid gray;
  border-radius: 0.2rem;
  height: 2rem;
  font-size: 16px;

  // Remove default controls ==========
  /* Chrome, Safari, Edge, Opera */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  & {
    -moz-appearance: textfield;
  }

  // Set default placeholder text ======
  ::placeholder {
    color: grey;
  }
`

export const Select = styled.select`
  border: 1px solid gray;
  border-radius: 0.2rem;
  height: 2rem;
  font-size: 16px;
`

export const OptionItem = styled.option``
