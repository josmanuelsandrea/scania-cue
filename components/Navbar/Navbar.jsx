import { NavContainer } from "./Navbar.styles"
import Burger from "./Icons/Burger"
import Location from "./Icons/Location"
import ScaniaLogo from "./ScaniaLogo/ScaniaLogo"

const Navbar = ({ setNavbarStatus }) => {
  return (
    <NavContainer role="Navbar">
        <Burger setNavbarStatus={() => setNavbarStatus(false)} />
        <ScaniaLogo />
        <Location />
    </NavContainer>
  )
}

export default Navbar