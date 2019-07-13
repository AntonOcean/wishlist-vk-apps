import styled from "styled-components";
import {fontCalc} from "../../style";


export const StyleButton = styled.button`
    text-align: center;
    color: #ffffff;
    padding: 10px 20px;
    ${fontCalc(12)};
    width: 100%;
    border-radius: 21px;
    border: none;
    background-image: linear-gradient(79deg, #7dc4ff, #6700ff);
    cursor: pointer;
    
    &:hover {
        background-image: linear-gradient(259deg, #7dc4ff, #7dc4ff);
    }
    
    &:active {
        background-image: none;
        background-color: #6700ff;
    }
`;