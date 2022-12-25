import styled from "styled-components"
import Navbar from "../components/Navbar/Navbar"
import Container from "../components/Container/Container"
import { useState } from "react"
import Head from "next/head"

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--Scania-Blue);
`

export default function Home() {
    /* This state is for the status of the navbar */
    const [statusNavbar, setActiveNavbar] = useState(false)
    const changeStatus = () => {
        setActiveNavbar(!statusNavbar)
    }

    return (
        <Main>
            <Head>
                <title>SCANIA - Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Navbar setNavbarStatus={changeStatus} />
            <Container statusNavbar={statusNavbar} />
        </Main>
    )
}