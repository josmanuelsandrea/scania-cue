import ContentDropdown from './ContentDropdown/ContentDropdown'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

const SubDropdown = ({ subList }) => {
	return (
		<Container>
			{subList ? subList.map(x =>
				<ContentDropdown content={x} />
			) : null}
		</Container>
	)
}

export default SubDropdown