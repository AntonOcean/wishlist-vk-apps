import styled from "styled-components";


export const StyleSearchDropDown = styled.ul`
    display: ${props => props.show ? "block" : "none"};
    width: 100%;
    position: absolute;
    margin: 0;
    padding: 0;
    border-radius: 20px;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    
    & li {
        padding: 5px 20px;
        margin: 0;
        list-style-type: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    
    & li:hover {
        background: ghostwhite;
    }
`;