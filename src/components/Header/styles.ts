import styled from "styled-components"
import DefaultHeader from "./component"

export const HeaderWrapper = styled.div`
  width: 100vw;
  border: 1px solid black;
  background-color: #000;
  padding: 0 20vw;
`

export const HeaderList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HeaderItem = styled.li`
  color: #fff;
  cursor: pointer;
  &: hover {
    text-shadow:
    /* белый свет */
    0 0 1px #fff,
    0 0 2px #fff,
    0 0 5px #fff,
    /* зеленый свет */
    0 0 11px #0fa,
    0 0 20px #0fa,
    0 0 30px #0fa,
    0 0 55px #0fa,
    0 0 80px #0fa;
    }

  }
`
