import styled from "styled-components"
import { MdKeyboardArrowDown as ArrowDown } from 'react-icons/md'
import { paddingConfig } from "../NavbarSections.config"

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: .5em 0 0 0;
`

const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: var(--Scania-Font-2);
    text-transform: uppercase;
    color: var(--Scania-Blue);
    padding: 0 ${paddingConfig.paddingOfTitle + 'em'};

    > svg { 
        font-size: 1.5em;
    }
`

const DropdownContent = styled.div`
    padding-left: ${paddingConfig.paddingOfSubDropdown + 'em'};
    background-color: var(--Scania-Grey-50);
`

const Dropdown = ({ title, children }) => {
  return (
    <Div>
        <TitleDiv>
            <h3>{title}</h3>
            <ArrowDown />
        </TitleDiv>
        <DropdownContent>
            {children}
        </DropdownContent>
    </Div>
  )
}

export default Dropdown