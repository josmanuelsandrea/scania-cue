import { MdKeyboardArrowDown as ArrowDown, MdKeyboardArrowUp as ArrowUp } from 'react-icons/md'
import { Div, TitleDiv, DropdownContent } from "./Dropdown.style"
import { useState } from 'react'

const Dropdown = ({ title, children }) => {
	const [deployed, setDeployed] = useState(false)

	const changeDeploy = () => {
		setDeployed(!deployed)
	}

	return (
		<Div>
			<TitleDiv>
				<h3>{title}</h3>
				{deployed ? <ArrowUp onClick={changeDeploy} />  : <ArrowDown onClick={changeDeploy}/>}
			</TitleDiv>
			<DropdownContent deployed={deployed}>
				{children}
			</DropdownContent>
		</Div>
	)
}

export default Dropdown