import React from "react";
import { Circle, PieItemStyle, Percentage, TitleAndMark } from "./PieItem-style";

interface IPieItem {
  title: string;
  itemColor: string;
}



const PieItem = (props: IPieItem) => {
  const { title, itemColor } = props;

  return (
    <PieItemStyle>
      <TitleAndMark>
        <Circle color={itemColor} />
        {title}
      </TitleAndMark>
      <Percentage>%15</Percentage>
    </PieItemStyle>
  );
};

export default PieItem;
