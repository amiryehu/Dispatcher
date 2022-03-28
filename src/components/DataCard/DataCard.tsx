import { type } from "os";
import React from "react";
import { DataCardContainer, DataCardHeader, BottomLineStyle} from "./DataCard-style";

type IDataCard = {
  title: string;
};

const DataCard = (props: IDataCard) => {
  const { title } = props;

  return (
    <DataCardContainer>
      <DataCardHeader>
        {title}
        <BottomLineStyle/>
      </DataCardHeader>
    </DataCardContainer>
  );
};

export default DataCard;
