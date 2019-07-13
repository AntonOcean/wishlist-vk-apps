import styled from "styled-components";
import {fontCalc} from "../../style";
import {Constant} from "../../style";


export const StyleProductItem = styled.div`
    width: 100%;
    
    img {
      width: 100%;
      @media screen and (max-width: ${Constant.mobileWidth}) {
        height: 100%;
      }
    };
    
    .name {
      ${fontCalc(18)};
      font-weight: bold;
      padding: 10px 0;
    };
    
    .price {
      ${fontCalc(12)};
    };
    
    .description {
      ${fontCalc(10)};
      color: #b2b2b2;
      padding: 10px 0;
    }
`;