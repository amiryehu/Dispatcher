import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { pieColors } from "../../Utils/Constances";
import PieItem from "./PieItem";
import Articles from "../../mockData/mockData.json"


const PieGraph = () => {
  // local data - need to change after connect to real data

  const articles = Articles;
  console.log(articles.articles);

   const data = [
    { name: "NBC", value: 400 },
    { name: "Vulture", value: 300 },
    { name: "CNN", value: 300 },
    { name: "ESPN", value: 200 },
    { name: "BBC", value: 200 },
  ];
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
    const fourElement = data.slice(0,4); 
    return fourElement.map((entry, index) => (
      <PieItem title={data[index].name} itemColor={COLORS[index % COLORS.length]} />
    ));
  };


  return (
    <>
      <ResponsiveContainer width="100%" height="50%">
        <PieChart width={400} height={400}>
          <Pie data={data} innerRadius={60} outerRadius={70} dataKey="value" >
            {renderGraphColors()}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {renderPieItem()}
    </>
  );
};

export default PieGraph;