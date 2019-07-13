import styled from "styled-components";
import {StyleLocation} from "../../../style/location";
import {StyleRoundImage} from "../../../style/roundimage";
import {Constant} from "../../../style/constant";


export const StyleRightHeader = styled.div`
    display: flex;
    align-items: center;
    
    ${StyleLocation} {
      margin-right: 25px;
    }
    
    ${StyleRoundImage} {
      margin-left: -15px;
        @media screen and (max-width: ${Constant.mobileWidth}) {
          display: none;
        };
    }
`;