import styled from "styled-components"
import { sizesConfig } from '../Navbar/Navbar.config'

const Div = styled.div`
    transform: ${props => props.navbarStatus ? `translateX(${sizesConfig.left_side_size}%)` : 'translateX(0%)'};
    transition: transform .5s ease;
`

const Content = ({ navbarStatus }) => {
  return (
    <Div navbarStatus={navbarStatus}>Content</Div>
  )
}

export default Content