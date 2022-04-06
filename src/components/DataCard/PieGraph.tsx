import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { pieColors } from "../../Utils/Constances";
import PieItem from "./PieItem";

type IPieGraph = {
  data: {name: string; value: number}[]
};

const PieGraph = (props: IPieGraph) => {
  const { data } = props;

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
      />
    ));
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="50%">
        <PieChart width={400} height={400}>
          <Pie data={data} innerRadius={60} outerRadius={70} dataKey="value">
            {renderGraphColors()}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {renderPieItem()}
    </>
  );
};

export default PieGraph;
