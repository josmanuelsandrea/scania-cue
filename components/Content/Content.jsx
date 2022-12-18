import styled from "styled-components"

const Div = styled.div`
    transform: ${props => props.navbarStatus ? 'translateX(75%)' : 'translateX(0)'};
    transition: transform .5s ease;
`

const Content = ({ navbarStatus }) => {
  return (
    <Div navbarStatus={navbarStatus}>Content</Div>
  )
}

export default Content