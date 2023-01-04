import styled from 'styled-components'
import Dropdown from './Dropdown/Dropdown'
import SubDropdown from './SubDropdown/SubDropdown'
import Trucks from '../Trucks/Trucks'

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Pipe = () => {
    return (
        <h1>Pipe</h1>
    )
}

const NavbarSections = () => {
    const subdropdowns = [
        {title: "Camiones", component: Trucks},
        {title: "Pipisito", component: Pipe}
    ]

    /* 
        When The 'Dropdown' component does not have any children, you need to provide an URL to the component through the 'URLto' parameter. For example:
        <Dropdown title="Services" URLto="/pages/page">
    */

    return (
        <Div>
            <Dropdown title="Productos">
                <SubDropdown subList={subdropdowns} />
            </Dropdown>
            <Dropdown title="Servicios" URLto={'www.google.com'}>
                {/* <SubDropdown subList={null} /> */}
            </Dropdown>
            <Dropdown title="Sobre SCANIA" URLto={"https://www.youtube.com"}>

            </Dropdown>
        </Div>
    )
}

export default NavbarSections