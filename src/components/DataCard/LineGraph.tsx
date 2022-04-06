import React from "react";
import {AreaChart, XAxis,Area, Line, ResponsiveContainer} from 'recharts';
import { colors } from "../../Utils/Constances";

type ILineGraph = {
  data: {name: string; value: number}[]
};

const LineGraph = (props: ILineGraph) => {
  const { data } = props;
    // const data = [
    //     {
    //       "month": "A",
    //       "uv": 4000,
    //       "pv": 2400,
    //       "amt": 2400
    //     },
    //     {
    //       "month": "B",
    //       "uv": 3000,
    //       "pv": 1398,
    //       "amt": 2210
    //     },
    //     {
    //       "month": "C",
    //       "uv": 2000,
    //       "pv": 9800,
    //       "amt": 2290
    //     },
    //     {
    //       "month": "D",
    //       "uv": 2780,
    //       "pv": 3908,
    //       "amt": 2000
    //     },
    //     {
    //       "month": "E",
    //       "uv": 1890,
    //       "pv": 4800,
    //       "amt": 2181
    //     },
    //     {
    //       "month": "F",
    //       "uv": 2390,
    //       "pv": 3800,
    //       "amt": 2500
    //     },
    //     {
    //       "month": "G",
    //       "uv": 3490,
    //       "pv": 4300,
    //       "amt": 2100
    //     }
    //   ]
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
