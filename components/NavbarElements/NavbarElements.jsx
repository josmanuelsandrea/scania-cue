import styled from "styled-components"
import { sizesConfig } from "../Navbar/Navbar.config"

const Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--Scania-Grey-400);
    min-height: 100%;
    width: ${sizesConfig.left_side_size}%;
    padding-right: ${sizesConfig.padding_spacing}%;
    transform: ${props => props.navbarStatus ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: transform .5s ease;
`

const NavbarElements = ({ navbarStatus }) => {
  return (
    <Div navbarStatus={navbarStatus} role="Navbar-content">NavbarElements</Div>
  )
}

export default NavbarElements