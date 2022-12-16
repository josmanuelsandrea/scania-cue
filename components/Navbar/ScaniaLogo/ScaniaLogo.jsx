import styled from "styled-components"

const LogoContainer = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 3em;
        height: auto;
    }
`

const ScaniaLogo = () => {
    return (
        <LogoContainer>
            <img src="/images/scania_logo_original_100x95.png" alt="Scania Logo" />
        </LogoContainer>
    )
}

export default ScaniaLogo