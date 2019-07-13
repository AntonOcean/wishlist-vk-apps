import styled from "styled-components";
import {Constant} from "../../../style/constant";
import {StyleProductListColumn} from "./productlistcolumn";


export const StyleProductList = styled.div`
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
    ${StyleProductListColumn} {
        width: 200px;
        margin:0 15px;
    };
    
    @media screen and (max-width: ${Constant.mobileWidth}) {
        width: 100%;
        margin: 0;
        
        ${StyleProductListColumn} {
            width: 100%;
            margin:0;
        };
    }
`;