import styled from "styled-components";
import { screenSize } from "../../Utils/Constances";

export const CardContainerStyle = styled.div`
  width: 73%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: scroll;
  /* margin-right: 10px; */
  @media screen and (max-width: ${screenSize.tablet}) {
    width: 100%;
    transition-duration: 500ms;
    /* height: 90vh; */
  }
`;
