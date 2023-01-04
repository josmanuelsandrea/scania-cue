import { Fragment } from "react"
import ArrowComponent from "../../ArrowComponent/ArrowComponent"
import { TitleDiv } from '../../Dropdown/Dropdown.style'
import { paddingConfig } from '../../NavbarSections.config'
import { useState } from "react"
import styled from "styled-components"

const Title = styled(TitleDiv)`
	padding-right: ${paddingConfig.paddingOfTitle + 'em'};
`

const DropdownContent = styled.div`
	padding-left: ${paddingConfig.paddingOfTitle + 1 + 'em'};
`

const ContentDropdown = ({ content }) => {

    const [deployed, setDeployed] = useState(false)

    const toggleDeployed = () => {
        setDeployed(!deployed)
    }

    return (
        <Fragment key={content.title}>
            <Title onClick={toggleDeployed}>
                <p>{content.title}</p>
                <ArrowComponent deployed={deployed} />
            </Title>
            <DropdownContent>
                {deployed ? <content.component /> : null}
            </DropdownContent>
        </Fragment>
    )
}

export default ContentDropdown