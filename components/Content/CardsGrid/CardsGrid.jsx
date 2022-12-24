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
        <Card 
            background_image={"/images/Cards/Truck.jpeg"} 
            bg_position={"top"} 
            title="Soluciones eléctricas"
            text={"El objetivo de Scania es impulsar el cambio hacia un sistema de transporte sostenible, mediante el desarrollo de soluciones de transporte seguras, inteligentes y energéticamente eficientes que sean mejores para las personas y el planeta."}
            button_text={"El objetivo de scania"}
        />
        <Card 
            background_image={"/images/Cards/Technician.jpg"} 
            bg_position={"center"} 
            title="Puestos disponibles"
            text={"En Scania, nuestros empleados constituyen nuestro activo más valioso. Buscamos personas que estén listas para asumir el desafío de impulsar el cambio hacia un futuro mejor."}
            button_text={"Encuentra vacantes aquí"}
        />
        <Card 
            background_image={"/images/Cards/Super.jpeg"} 
            title="Gama super"
            bg_position={"bottom"} 
            text={"Conoce la nueva gama de Scania Super y descubre todas las novedades en nuestra experiencia digital"}
            button_text={"Experiencia digital"}
        />
    </Div>
  )
}

export default CardsGrid