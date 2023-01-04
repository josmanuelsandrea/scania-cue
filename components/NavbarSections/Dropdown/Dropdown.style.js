import styled from "styled-components"
import { paddingConfig } from '../NavbarSections.config'

export const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: .5em 0 0 0;
`

export const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--Scania-Font-2);
    text-transform: uppercase;
    color: var(--Scania-Blue);
    padding: 0 ${paddingConfig.paddingOfTitle + 'em'};

    > svg { 
        font-size: 1.5em;
    }

    > p, a {
        border-bottom: 2px solid transparent;
        font-weight: 600;
    }

    > a:hover, p:hover{
        border-bottom: 2px solid var(--Scania-Blue);
    }
`

export const DropdownContent = styled.div`
    display: ${props => props.deployed ? 'block' : 'none'};
    padding-left: ${paddingConfig.paddingOfSubDropdown + 'em'};
    background-color: var(--Scania-Grey-100);
`