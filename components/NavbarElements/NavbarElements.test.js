import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import NavbarElements from './NavbarElements'
import { sizesConfig } from '../Navbar/Navbar.config'

describe('NavbarElements styling', () => {
    it('Element has proper style when active', () => {
        const { container } = render(<NavbarElements navbarStatus={true} />)
        const component = container.firstChild

        expect(component).toHaveStyle({
            transform: 'translateX(0%)',
            paddingRight: `${sizesConfig.padding_spacing}%`,
            width: `${sizesConfig.left_side_size}%`,
        })
    })

    it('Element has proper style when inactive', () => {
        const { container } = render(<NavbarElements navbarStatus={false} />)
        const component = container.firstChild

        expect(component).toHaveStyle({
            transform: 'translateX(-100%)'
        })
    })
})