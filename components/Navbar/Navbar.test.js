import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'
import NavbarElements from '../NavbarElements/NavbarElements'

describe('Navigation Bar', () => {
    it('Navbar renders', () => {
        render(<Navbar />)
        const Nav = screen.getByRole("Navbar")
        expect(Nav).toBeInTheDocument()
    })

    it('Left side element renders', () => {
        render(<NavbarElements />)
        const ContentDiv = screen.getByRole("Navbar-content")
        expect(ContentDiv).toBeInTheDocument()
    })
})