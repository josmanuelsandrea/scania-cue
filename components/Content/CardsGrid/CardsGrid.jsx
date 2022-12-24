import styled from "styled-components"
import Card from "./Card/Card"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1 0;
`

const CardsGrid = () => {
  return (
    <Div>
        <Card background_image={"/images/Cards/Truck.jpeg"} bg_position={"top"} title="Soluciones eléctricas"/>
        <Card background_image={"/images/Cards/Technician.jpg"} bg_position={"center"} title="Puestos disponibles"/>
        <Card background_image={"/images/Cards/Super.jpeg"} title="Gama super"/>
    </Div>
  )
}

export default CardsGrid