import styled from "styled-components";
import { colors, cardrRadius } from "../../Utils/Constances";

export const DataCardContainer = styled.div`
  display: flex;
  width: 21%;
  height: 378px;
  border-radius: ${cardrRadius};
  background: ${colors.white};
  align-items: center;
  font-style: "normal";
`;