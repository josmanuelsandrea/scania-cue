import styled from "styled-components"

const Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--Scania-Grey-400);
    min-height: 100%;
    width: 75%;
    padding-right: 25%;
    transform: ${props => props.navbarStatus ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: transform .5s ease;
`

const NavbarElements = ({ navbarStatus }) => {
  return (
    <Div navbarStatus={navbarStatus}>NavbarElements</Div>
  )
}

export default NavbarElements