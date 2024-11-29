import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { Type_forWindGraphProps } from './types';
import { CustomTooltip } from './../Shared';

class WindGraph extends PureComponent<Type_forWindGraphProps> {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-v3w7s9';

  render() {
    const { weatherDataFor_wind } = this.props;

    const extractTime = (name: string) => {
      const [_date, _day, time] = name.split(" ");
      return time;
    };

    return (
      <ResponsiveContainer
        width="100%"
        height="100%">
        <LineChart
          width={500}
          height={300}
          data={weatherDataFor_wind}>
          <CartesianGrid
            strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            fontSize={8}
            angle={-30}
            padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip
            content={
              <CustomTooltip
                units={"meter/sec"}
                secUnits={"km/h"}
                secRecalculate={3.6} />} />
          <Legend wrapperStyle={{ width: "100%", height: "40px", fontSize: "15px", display: "flex", justifyContent: "center", alignItems: "end" }} />
          {
            weatherDataFor_wind.filter((item) => extractTime(item.name) === "0:00:00").map((midnightItem, index) => {
              const [_date, day, _time] = midnightItem.name.split(" ");
              return (
                <ReferenceLine
                  key={index}
                  x={midnightItem.name}
                  stroke="red"
                  label={{
                    value: day,
                    dy: -60,
                    fill: "black",
                    fontSize: 15,
                  }} />
              );
            })
          }
          <Line
            type="monotone"
            dataKey="wind"
            stroke="black"
            activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default WindGraph;
