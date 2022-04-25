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
    pieColors.orange,
    pieColors.lightAzure,
    pieColors.black,
    pieColors.gray,
    pieColors.darkBlue,
  ];

  const fiveColors = data.slice(0, 5);
  const renderGraphColors = () => {
    return fiveColors.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ));
  };
  console.log(fiveColors);

  const renderPieItem = () => {
    const fiveElement = data.slice(0, 4);
    return fiveElement.map((entry, index) => (
      <PieItem
        title={fiveElement[index].name}
        itemColor={COLORS[index % COLORS.length]}
        percentage={fiveElement[index].value}
        key={index}
      />
    ));
  };

  return (
    <PieAndPieItems>
      <ResponsiveContainer width="100%" height="50%">
        <PieChart width={400} height={400}>
          <Pie data={fiveColors} innerRadius={60} outerRadius={70} dataKey="value">
            {renderGraphColors()}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {renderPieItem()}
    </PieAndPieItems>
  );
};

export default PieGraph;