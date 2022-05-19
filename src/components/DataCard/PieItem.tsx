import React from "react";
import { Circle, PieItemStyle, Percentage, TitleAndMark } from "./PieItem-style";

interface IPieItem {
  title: string;
  itemColor: string;
  percentage: number;
}

function capitalizeFirstLetter(string:string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


const PieItem = (props: IPieItem) => {
  const { title, itemColor,percentage } = props;

  return (
    <PieItemStyle>
      <TitleAndMark>
        <Circle color={itemColor} />
        {capitalizeFirstLetter(title)}
      </TitleAndMark>
      <Percentage>{`${Math.floor(percentage)}%`}</Percentage>
    </PieItemStyle>
  );
};

export default PieItem;
