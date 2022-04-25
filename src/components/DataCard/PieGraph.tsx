import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { pieColors } from "../../Utils/Constances";
import { PieAndPieItems } from "./DataCard-style";
import PieItem from "./PieItem";

type IPieGraph = {
  data: {name: string; value: number}[]
};

const PieGraph = (props: IPieGraph) => {
  const { data } = props;
  let sum = 0;

  const COLORS = [
    pieColors.black,
    pieColors.orange,
    pieColors.lightAzure,
    pieColors.darkBlue,
    pieColors.gray,
  ];

  
  const renderGraphColors = () => {
    return data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ));
  };

  const renderPieItem = () => {
    const fourElement = data.slice(0, 4);
    return fourElement.map((entry, index) => (
      <PieItem
        title={data[index].name}
        itemColor={COLORS[index % COLORS.length]}
        percentage={data[index].value}
        key={index}
      />
    ));
  };

  return (
    <PieAndPieItems>
      <ResponsiveContainer width="100%" height="50%">
        <PieChart width={400} height={400}>
          <Pie data={data} innerRadius={60} outerRadius={70} dataKey="value">
            {renderGraphColors()}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {renderPieItem()}
    </PieAndPieItems>
  );
};

export default PieGraph;