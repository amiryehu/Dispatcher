import React from "react";
import DataCard from "../DataCard/DataCard";

const DataContainer = () => {
  return (
    <div style={{width: '24%',display:'flex', flexDirection:'column' ,gap:'20px'}}>
      <DataCard title="Source" type="Source"/>
      <DataCard title="Dates" type="Dates"/>
      <DataCard title="Tags" type="NoTags"/>
    </div>
  );
};

export default DataContainer;
