import styled from "styled-components"

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: var(--Scania-Grey-900-transparent);
`

const Title = styled.h1`
    font-family: Scania Sans CY Headline;
    text-transform: uppercase;
    margin: .8em;
    color: var(--Scania-White);
`

const ImageBackground = styled.div`
    background-image: url(${props => props.background_image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
`

const Card = ({ background_image, title }) => {
  return (
    <CardDiv >
        <ImageBackground background_image={background_image} />
        <Title>{title}</Title>
    </CardDiv>
  )
}

export default Card