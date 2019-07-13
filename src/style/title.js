import styled from "styled-components";
import fontCalc from "./mixins/fontCalc";


const StyleContentTitle = styled.div`
    width: 100%;
    text-align: center;
    font-weight: bold;
`;


export const StyleBaseTitle = styled(StyleContentTitle)`
    ${fontCalc(20)};
`;


export const StyleSubTitle = styled(StyleContentTitle)`
    ${fontCalc(18)};
`;