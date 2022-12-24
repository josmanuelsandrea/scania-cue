/* Core testing libraries */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CardsGrid from './CardsGrid.jsx'

describe('CardsGrid to be rendered', () => {
    it("Cards Grid renders", () => {
        render(<CardsGrid />)
        const CardGrid = screen.getByRole("cards-grid")
        expect(CardGrid).toBeInTheDocument()
    })
})