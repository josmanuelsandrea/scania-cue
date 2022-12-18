import styled from "styled-components"
import Navbar from "../components/Navbar/Navbar"
import Container from "../components/Container/Container"
import { useState } from "react"

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--Scania-Blue);
`

export default function Home() {
    /* This state is for the status of the navbar */
    const [statusNavbar, setActiveNavbar] = useState(true)
    const changeStatus = () => {
        setActiveNavbar(!statusNavbar)
    }

    return (
        <Main>
            <Navbar setNavbarStatus={changeStatus} />
            <Container statusNavbar={statusNavbar} />
        </Main>
    )
}