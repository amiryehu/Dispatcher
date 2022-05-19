import { padding, style } from "@mui/system";
import { random } from "lodash";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Sector,
  Tooltip,
  Label,
} from "recharts";
import { useAppSelector } from "../../store/store";
import { pieColors } from "../../Utils/Constances";
import {
  OnlyPie,
  OnlyItems,
  PieItems,
} from "./DataCard-style";
import PieItem from "./PieItem";

const COLORS = [
  pieColors.orange,
  pieColors.lightAzure,
  pieColors.black,
  pieColors.gray,
  pieColors.darkBlue,
];

const PieGraph = () => {
  const articles = useAppSelector(
    (state) => state.apiArticlesResponse.articles
  );

  // arranged data
  let sumOfArticles = 0;
  const sourceCounter: { [key: string]: number } = {};
  const sortedSource: { name: string; value: number }[] = [];

  for (const element of articles) {
    if (sourceCounter[element.source.name]) {
      sourceCounter[element.source.name] += 1;
    } else {
      sourceCounter[element.source.name] = 1;
    }
    sumOfArticles++;
  }

  for (const source in sourceCounter) {
    sortedSource.push({
      name: source,
      value: (sourceCounter[source] * 100) / sumOfArticles,
    });
  }
  sortedSource.sort(function (a, b) {
    return b.value - a.value;
  });
  // end arranged datacon

  const fiveAndOtherSources: { name: string; value: number }[] = [];
  let othersSourcesCounter = 0;
  let temp = 0;
  let sumOther = 100;

  sortedSource.map((entry, index) => {
    fiveAndOtherSources.push({
      name: entry.name,
      value: entry.value,
    });
    if (index > 3) {
      return;
      othersSourcesCounter += entry.value;
    }
    temp += entry.value;
  });

  // console.log(source);

  console.log(sumOther);
  fiveAndOtherSources.map((source, index) => {});

  if (Math.ceil(100 - temp) > 0) {
    fiveAndOtherSources.splice(4, 0, {
      name: "Others",
      value: Math.ceil(100 - temp),
    });
  } else {
    fiveAndOtherSources.splice(4, 0);
  }
  fiveAndOtherSources.map((source, index) => {});
  const otherSourceToPie = fiveAndOtherSources.slice(0, 5);

  const renderGraphColors = () => {
    return otherSourceToPie.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ));
  };

  const renderPieItem = () => {
    return otherSourceToPie.map((entry, index) => (
      <PieItem
        title={otherSourceToPie[index].name}
        itemColor={COLORS[index % COLORS.length]}
        percentage={otherSourceToPie[index].value}
        key={index}
      />
    ));
  };

  return (
    <>
    <OnlyPie>
      {/* <SumOfArticlesInGrapg>{articles.length}</SumOfArticlesInGrapg> */}
      <ResponsiveContainer width="100%" height="70%">
        <PieChart width={500} height={500}>
          <Pie
            data={otherSourceToPie}
            // cx="50%"
            // cy="50%"
            innerRadius={63}
            outerRadius={73}
            dataKey="value"
          >
            <Label value={sortedSource.length} fontFamily={"Mulish"} fontSize={'1.5rem'} position="center" style={{paddingBlock: '10px'}}/>
            {/* <Label value={'Articles'} fontFamily={"Mulish"} fontSize={'0.8rem'} position="centerTop" /> */}
            {renderGraphColors()}
          </Pie>
          {/* <Tooltip contentStyle={{ fontFamily: 'Roboto', fontSize: 15  }} /> */}
        </PieChart>
      </ResponsiveContainer>
    </OnlyPie>
    <OnlyItems>
      <PieItems>{renderPieItem()}</PieItems>
    </OnlyItems>
    </>
  );
};

export default PieGraph;
