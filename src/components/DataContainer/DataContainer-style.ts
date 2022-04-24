import styled from "styled-components";
import { screenSize } from "../../Utils/Constances";

export const DataCardContainer = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: ${screenSize.tablet}) {
    display: none;
    transition-duration: 500ms;
  }
`;
