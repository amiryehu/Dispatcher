import styled from "styled-components";
import { colors, pieColors } from "../../Utils/Constances";

interface ColorItemProps{
    color: string
}

export const PieItemStyle = styled.div`
  width: 80%;
  height: 30px;
  margin-left: 9%;
  margin-right: 5%;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: ${pieColors.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Circle = styled.div<ColorItemProps>`
    background: ${props=>props.color};
    border-radius: 50%;
    width: 7px;
    height: 7px;
`;

export const leftSide = {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 400,
    gap: '1.4rem'
}

export const percentage = {
    color: '#9FA2B4',
    fontWeight: 400,
}