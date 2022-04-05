import { type } from "os";
import React from "react";
import {  DataCardContainer,  DataCardHeader,  BottomLineStyle,  DataContent,  dataContentStyle,  chartImgStyle} from "./DataCard-style";
import chartImg from "../../assets/Icons/chart.svg";
import LineGraph  from './LineGraph'
import PieGraph from "./PieGraph";

type IDataCard = {
  title: string;
  type: string;
};

const DataCard = (props: IDataCard) => {
  const { title, type } = props;

  const renderGraph = () => {
    return(
      <DataContent>
        <img src={chartImg} style={{...chartImgStyle }} />
        <div style={{ ...dataContentStyle}}>
          No data to display
        </div>
      </DataContent>
    )
  }

  return (
    <DataCardContainer>
      <DataCardHeader>
        {title}
        <BottomLineStyle />
      </DataCardHeader>
      {type == 'Source'? <PieGraph/>: type =='Dates'? <LineGraph/> : renderGraph()}
    </DataCardContainer>
  );
};

export default DataCard;
