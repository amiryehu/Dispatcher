import React from "react";
import { AreaChart, XAxis, Area, ResponsiveContainer, Tooltip } from "recharts";
import { useAppSelector } from "../../store/store";
import { Months } from "../../store/Utils/filtersData";
import { colors } from "../../Utils/Constances";
import { formattingDateToMonth } from "../../Utils/DateConvert";


const LineGraph = () => {
  const articles = useAppSelector(
    (state) => state.apiArticlesResponse.articles
  );

  const monthObject = {
    January: 0,
    February: 0, 
    March: 0 ,
    April: 0 ,
    May: 0 ,
    June: 0 ,
    July: 0 ,
    August: 0 ,
    September: 0 ,
    October: 0 ,
    November: 0 ,
    December: 0 
  };

  const monthArray = [
    { name: "JAN", value: 0 },
    { name: "FEB", value: 0 },
    { name: "MAR", value: 0 },
    { name: "APR", value: 0 },
    { name: "MAY", value: 0 },
    { name: "JUN", value: 0 },
    { name: "JUL", value: 0 },
    { name: "AUG", value: 0 },
    { name: "SEP", value: 0 },
    { name: "OCT", value: 0 },
    { name: "NOV", value: 0 },
    { name: "DEC", value: 0 }
  ];
  
  articles.map(articlr => {
    const month = formattingDateToMonth( articlr.publishedAt);
    Object.values( monthObject[month as Months] += 1);
  })

  for(let i = 0; i < monthArray.length; i++){
    monthArray[i].value = (monthObject[Object.keys(monthObject)[i] as Months])
  }


  return (
    <ResponsiveContainer width="100%" height="90%">
      <AreaChart
        width={200}
        height={150}
        data={monthArray}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset=".326" stopColor={colors.blue} stopOpacity={0.15} />
            <stop offset="1.035" stopColor={colors.azure} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize:'0.5em'}} allowDataOverflow={true} minTickGap={12}/>
        <Tooltip contentStyle={{ fontFamily: 'Roboto', fontSize: 15  }} />
        <Area
          type="monotone"
          dataKey="value"
          stroke={colors.blue}
          fillOpacity={1}
          fill="url(#colorUv)"
          strokeWidth={3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
