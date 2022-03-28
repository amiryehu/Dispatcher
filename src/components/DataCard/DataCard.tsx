import { type } from "os";
import React from "react";
import {
  DataCardContainer,
  DataCardHeader,
  BottomLineStyle,
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <img src={chartImg} style={{ height: "133px", width: "133px" }} />
        <div
          style={{
            color: `${colors.darkGray}`,
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          No data to display
        </div>
      </div>
    </DataCardContainer>
  );
};

export default DataCard;
