import { Div, TitleDiv, DropdownContent } from "./Dropdown.style"
import { useState, Children } from 'react'
import ArrowComponent from "../ArrowComponent/ArrowComponent"
import TitleComponent from "../TitleComponent/TitleComponent"

const Dropdown = ({ title, children, URLto }) => {
	const [deployed, setDeployed] = useState(false)

	const changeDeploy = () => {
		setDeployed(!deployed)
	}

	const isThereAnyChildren = Children.count(children) > 0 ? true : false

	return (
		<Div>
			<TitleDiv onClick={changeDeploy}>
				<TitleComponent isThereAnyChildren={isThereAnyChildren} title={title} URLto={URLto} />
				{isThereAnyChildren ? <ArrowComponent deployed={deployed} /> : null}
			</TitleDiv>
			<DropdownContent deployed={deployed}>
				{children}
			</DropdownContent>
		</Div>
	)
}

export default Dropdown