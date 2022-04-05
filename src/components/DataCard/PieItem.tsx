import React from "react";
import { Circle, PieItemStyle, leftSide, percentage } from "./PieItem-style";

interface IPieItem {
  title: string;
  itemColor: string;
}



const PieItem = (props: IPieItem) => {
  const { title, itemColor } = props;

  return (
    <PieItemStyle>
      <div style={{ ...leftSide }}>
        <Circle color={itemColor} />
        {title}
      </div>
      <div style={{...percentage}}>%15</div>
    </PieItemStyle>
  );
};

export default PieItem;
