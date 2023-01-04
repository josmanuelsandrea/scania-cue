import { MdKeyboardArrowDown as ArrowDown, MdKeyboardArrowUp as ArrowUp } from 'react-icons/md'

const ArrowComponent = ({ deployed }) => {
  if (deployed) return (<ArrowUp />)

  return (<ArrowDown />)
}

export default ArrowComponent