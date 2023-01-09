import styled from "styled-components"

export const TemplateButton = styled.button`
  background-color: #4caf50; /* Green */
  border: 2px solid #4caf50;
  border-radius: 10px;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`
