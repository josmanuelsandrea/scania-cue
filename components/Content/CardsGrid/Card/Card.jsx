import styled from "styled-components"

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    background-color: var(--Scania-Grey-900-transparent);
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    transition: flex-grow .5s;

    &:hover {
        flex-grow: 2;
    }

    &:hover .card_description_text {
        opacity: 1;
        line-height: 1.5em;
    }
`

const Title = styled.h1`
    font-family: var(--Scania-Font);
    text-transform: uppercase;
    color: var(--Scania-White);
`

const ImageBackground = styled.div`
    background-image: url(${props => props.background_image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${props => props.bg_position};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--Scania-White);
    opacity: 0;
    transition: opacity .2s, line-height .5s;
    line-height: .5px;
`

const Text = styled.p`
    font-family: var(--Scania-Font-2);
    margin: .8em;
    font-size: 1.1em;
`

const Padding = styled.div`
    margin: .8em;
`

const Button = styled.a`
    padding: .4em .8em;
    border: 2px solid var(--Scania-White);
    margin: .8em;
    text-align: center;
    font-family: var(--Scania-Font);
    font-size: 1.1em;
`

const Card = ({ background_image, title, bg_position, text, button_text }) => {
    return (
        <CardDiv>
            <ImageBackground background_image={background_image} bg_position={bg_position} role="background_image_card" />
            <Padding>
                <Title>{title}</Title>
            </Padding>
            <Description className="card_description_text">
                <Text>{text}</Text>
                <Button>{button_text}</Button>
            </Description>
        </CardDiv>
    )
}

export default Card