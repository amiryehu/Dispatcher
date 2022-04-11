import React from "react";
import {AreaChart, XAxis,Area, ResponsiveContainer} from "recharts";
import { colors } from "../../Utils/Constances";

type ILineGraph = {
  data: {name: string; value: number}[]
};

const LineGraph = (props: ILineGraph) => {
  const { data } = props;
  return (
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={400} height={150} data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
        <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset=".326" stopColor={colors.blue} stopOpacity={0.15} />
            <stop offset="1.035" stopColor={colors.azure} stopOpacity={0} />
            </linearGradient>
        </defs>
        <XAxis dataKey="month" />
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
  )
};

export default LineGraph;
