import styled from "styled-components"
import { sizesConfig } from '../Navbar/Navbar.config'
import CardsGrid from "./CardsGrid/CardsGrid"

const Div = styled.div`
    transform: ${props => props.navbarStatus ? `translateX(${sizesConfig.left_side_size}%)` : 'translateX(0%)'};
    transition: transform .5s ease;
    height: 100%;
`

const Content = ({ navbarStatus }) => {
  return (
    <Div navbarStatus={navbarStatus}>
      <CardsGrid />
    </Div> 
  )
}

export default Content