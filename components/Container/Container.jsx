import styled from "styled-components"
import NavbarElements from "../NavbarElements/NavbarElements"
import Content from "../Content/Content"

const DivContainer = styled.div`
    flex: 1 0;
    display: flex;
    flex-direction: column;
    background-color: var(--Scania-Grey-50);
    display: flex;
    position: relative;
    height: 100%;
`

const Container = ({ statusNavbar }) => {
    return (
        <DivContainer>
            <NavbarElements navbarStatus={statusNavbar} />
            <Content navbarStatus={statusNavbar} />
        </DivContainer>
    )
}

export default Container