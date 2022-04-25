import React from "react";
import { Circle, PieItemStyle, Percentage, TitleAndMark } from "./PieItem-style";

interface IPieItem {
  title: string;
  itemColor: string;
  percentage: number;
}



const PieItem = (props: IPieItem) => {
  const { title, itemColor,percentage } = props;

  return (
    <PieItemStyle>
      <TitleAndMark>
        <Circle color={itemColor} />
        {title}
      </TitleAndMark>
      <Percentage>{`${percentage}%`}</Percentage>
    </PieItemStyle>
  );
};

export default PieItem;
