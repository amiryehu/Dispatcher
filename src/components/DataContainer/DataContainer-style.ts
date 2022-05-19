import styled from "styled-components";
import { screenSize } from "../../Utils/Constances";

export const DataCardContainer = styled.div`
  width:  22vw;
  min-width: 24em;
  display: flex;
  flex-direction: column;
  padding-left: 6px;
  gap: 20px;
  @media screen and (max-width: ${screenSize.tablet}) {
    display: none;
    transition-duration: 500ms;
  }
`;
