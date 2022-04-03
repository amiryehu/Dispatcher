import { type } from "os";
import React from "react";
import {
  DataCardContainer,
  DataCardHeader,
  BottomLineStyle,
  DataContent,
  dataContentStyle,
  chartImgStyle
} from "./DataCard-style";
import chartImg from "../../assets/Icons/chart.svg";
import { colors } from "../../Utils/Constances";

type IDataCard = {
  title: string;
};

const DataCard = (props: IDataCard) => {
  const { title } = props;

  return (
    <DataCardContainer>
      <DataCardHeader>
        {title}
        <BottomLineStyle />
      </DataCardHeader>
      <DataContent>
        <img src={chartImg} style={{...chartImgStyle }} />
        <div style={{ ...dataContentStyle}}>
          No data to display
        </div>
      </DataContent>
    </DataCardContainer>
  );
};

export default DataCard;
