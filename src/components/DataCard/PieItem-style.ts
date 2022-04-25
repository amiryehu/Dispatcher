import styled from "styled-components";
import { colors, pieColors } from "../../Utils/Constances";

interface ColorItemProps {
  color: string;
}

export const PieItemStyle = styled.div`
  width: 80%;
  height: 30px;
  margin-bottom: 7px;
  font-size: 1.15rem;
  color: ${pieColors.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Circle = styled.div<ColorItemProps>`
  background: ${(props) => props.color};
  border-radius: 50%;
  width: 7px;
  height: 7px;
`;

export const TitleAndMark = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  gap: 1.4rem;
`;

export const Percentage = styled.div`
  color: ${pieColors.fadedGray};
  font-weight: 400;
`;