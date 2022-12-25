import { CardDiv, ImageBackground, Padding, Title, Description, Text, Button } from './Card.style'

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