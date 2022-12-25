import styled from 'styled-components'
import Dropdown from './Dropdown/Dropdown'
import SubDropdown from './SubDropdown/SubDropdown'

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const NavbarSections = () => {
    return (
        <Div>
            <Dropdown title="Productos">
                <SubDropdown />
            </Dropdown>
            <Dropdown title="Servicios">
                <SubDropdown />
            </Dropdown>
        </Div>
    )
}

export default NavbarSections