import { MdKeyboardArrowDown as ArrowDown } from 'react-icons/md'
import { TitleDiv } from '../Dropdown/Dropdown.style'
import { paddingConfig } from '../NavbarSections.config'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

const Title = styled(TitleDiv)`
	padding-right: ${paddingConfig.paddingOfTitle + 'em'};
`

const SubDropdown = () => {
	return (
		<Container>
			<Title>
				<h3>Camiones</h3>
				<ArrowDown />
			</Title>
		</Container>
	)
}

export default SubDropdown