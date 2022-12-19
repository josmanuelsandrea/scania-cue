import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { sizesConfig } from '../Navbar/Navbar.config'
import Content from './Content'

describe('Content styling', () => {
    it('Render the proper styles when active', () => {
        const { container } = render(<Content navbarStatus={true} />)
        const component = container.firstChild

        expect(component).toHaveStyle({
            transform: `translateX(${sizesConfig.left_side_size}%)`
        })
    })

    it('Render the proper styles when inactive', () => {
        const { container } = render(<Content navbarStatus={false} />)
        const component = container.firstChild

        expect(component).toHaveStyle({
            transform: `translateX(0%)`
        })
    })
})