import React from "react";
import DataCard from "../DataCard/DataCard";

const DataContainer = () => {
  return (
    <div style={{display:'flex', flexDirection:'column' ,gap:'20px'}}>
      <DataCard title="Source" />
      <DataCard title="Dates" />
      <DataCard title="Tags" />
    </div>
  );
};

export default DataContainer;
