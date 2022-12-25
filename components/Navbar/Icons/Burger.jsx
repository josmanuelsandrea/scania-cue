import { HiBars3 as BurgerIcon } from "react-icons/hi2"
import { RxCross1 as Cross } from 'react-icons/rx'
import styled from "styled-components"

export const IconContainer = styled.div`
    font-size: 2.3em;
    display: flex;
    align-items: center;
    border-right: 2px var(--Scania-Grey-100) solid;
    padding: .3em .3em;
`

const Burger = ({ setNavbarStatus, statusNavbar }) => {
  return (
    <IconContainer>
        {statusNavbar ? <Cross onClick={setNavbarStatus} /> : <BurgerIcon onClick={setNavbarStatus}/> }
    </IconContainer>
  )
}

export default Burger