import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Card from './Card'

describe("Card component", () => {
    const data = {
        background_url: '/images/Cards/Truck.jpeg',
        bg_position: 'top',
        title: 'Soluciones eléctricas',
        text: 'El objetivo de Scania es impulsar el cambio hacia un sistema de transporte sostenible, mediante el desarrollo de soluciones de transporte seguras, inteligentes y energéticamente eficientes que sean mejores para las personas y el planeta.',
        button_text: 'El objetivo de scania'
    }

    it("Render the proper parameters", () => {    
        const { container: CardComponent } = render(<Card background_image={data.background_url} bg_position={data.bg_position} title={data.title} text={data.text} button_text={data.button_text} />)

        expect(CardComponent).toHaveTextContent(data.title)
        expect(CardComponent).toHaveTextContent(data.text)
        expect(CardComponent).toHaveTextContent(data.button_text)
    })

    it("bg_image has the proper styling", () => {
        render(<Card background_image={data.background_url} bg_position={data.bg_position} />)
        const bg_component = screen.getByRole("background_image_card")

        expect(bg_component).toHaveStyle({ position: 'absolute' })
        expect(bg_component).toHaveStyle({ backgroundPosition: data.bg_position })
    })
})