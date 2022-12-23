import styled from "styled-components"
import Card from "./Card/Card"

const Div = styled.div`
  display: grid; 
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
`

const CardsGrid = () => {
  return (
    <Div>
        <Card background_image={"/images/Cards/Truck.jpeg"} title="Soluciones eléctricas"/>
        <Card background_image={"/images/Cards/Truck.jpeg"} title="Puestos disponibles"/> 
        <Card background_image={"/images/Cards/Truck.jpeg"} title="Gama super"/>
    </Div>
  )
}

export default CardsGrid