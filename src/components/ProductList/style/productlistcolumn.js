import styled from "styled-components";
import {StyleProductItem} from "../../../components/ProductItem/style";
import {Constant} from "../../../style/constant";


export const StyleProductListColumn = styled.div`
    display: flex;
    flex-direction: column;
    
    ${StyleProductItem} {
        width: 200px;
        margin-bottom: 15px;
    };
    
    @media screen and (max-width: ${Constant.mobileWidth}) {
        flex-direction: row;
        
        ${StyleProductItem} {
            height: 200px;
            margin: 0 10px;
        }
    }
`;