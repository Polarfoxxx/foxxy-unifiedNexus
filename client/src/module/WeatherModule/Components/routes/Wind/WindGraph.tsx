import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
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
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={250}
          data={weatherDataFor_wind}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            fontSize={8}
            angle={-45}
            tickFormatter={(value) => {
              const parts = value.split(" ");
              return `${parts[0]} ${parts[2]}`;
            }} />
          <YAxis />
          <Tooltip content={
            <CustomTooltip
            weatherParameters='wind'
              units={"meter/sec"}
              secWeatherParameters='wind'
              secUnits={"km/h"}
              secRecalculate={3.6} />
          } />
          <Legend wrapperStyle={{
            width: "100%",
            height: "40px",
            fontSize: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }} />
          {weatherDataFor_wind.filter((item) => extractTime(item.name) === "0:00:00")
            .map((midnightItem, index) => {
              const [_date, day, _time] = midnightItem.name.split(" ");
              return (
                <ReferenceLine
                  key={index}
                  x={midnightItem.name}
                  stroke="red"
                  label={{
                    value: day,
                    dy: -70,
                    fill: "black",
                    fontSize: 15,
                  }} />);
            })}
          <Area
            type="monotone"
            dataKey="wind"
            stroke="var(--weatherWindLine)"
            fill="var(--weatherWindLine)"
            fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default WindGraph;


