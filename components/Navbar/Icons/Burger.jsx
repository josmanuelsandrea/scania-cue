import { GoThreeBars as BurgerIcon } from "react-icons/Go"
import styled from "styled-components"

export const IconContainer = styled.div`
    font-size: 2.3em;
    display: flex;
    align-items: center;
    border-right: 2px var(--Scania-Grey-100) solid;
    border-bottom: 2px var(--Scania-Grey-100) solid;
    padding: .3em .3em;
`

const Burger = () => {
  return (
    <IconContainer>
        <BurgerIcon />
    </IconContainer>
  )
}

export default Burger