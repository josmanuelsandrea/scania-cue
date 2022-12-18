import { IoLocationOutline as Location } from "react-icons/io5"
import styled from "styled-components"
import { IconContainer } from './Burger'

export const IconContainerDiv = styled(IconContainer)`
  border-right: 0px var(--Scania-Grey-100) solid;
  border-left: 2px var(--Scania-Grey-100) solid;
`

const Burger = () => {
  return (
    <IconContainerDiv>
      <Location />
    </IconContainerDiv>
  )
}

export default Burger