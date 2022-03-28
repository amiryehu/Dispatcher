import { type } from "os";
import React from "react";

type IDataCard = {
    title: string
}

const DataCard = (props: IDataCard) => {
    const {title} = props;
    
    return (
        <div>{title}</div>
    )
}

export default DataCard;