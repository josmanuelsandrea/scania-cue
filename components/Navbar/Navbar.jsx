import { NavContainer } from "./Navbar.styles"
import Burger from "./Icons/Burger"
import Location from "./Icons/Location"
import ScaniaLogo from "./ScaniaLogo/ScaniaLogo"

const Navbar = () => {
  return (
    <NavContainer>
        <Burger />
        <ScaniaLogo />
        <Location />
    </NavContainer>
  )
}

export default Navbar