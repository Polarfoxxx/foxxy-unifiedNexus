import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { curveCardinal } from 'd3-shape';
import { Type_forPressueGraphProps } from './types';
import { CustomTooltip } from '../Shared';
const cardinal = curveCardinal.tension(0.2);
class PressureAndCloudsGraph extends PureComponent<Type_forPressueGraphProps> {
  static demoUrl = 'https://codesandbox.io/p/sandbox/area-chart-different-shapes-6lwnhy';

  render() {
    const { weatherDataFor_pressure } = this.props;

    const extractTime = (name: string) => {
      const [_date, _day, time] = name.split(" ");
      return time;
    };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={250}
          data={weatherDataFor_pressure}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            fontSize={8}
            angle={-45} />
          <YAxis
            domain={[950, 1050]} />
          <Tooltip
            content={
              <CustomTooltip
                units={"hpma"} />
            }
          />
          {
            weatherDataFor_pressure.filter((item) => extractTime(item.name) === "0:00:00").map((midnightItem, index) => {
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
          <Area
            type="monotone"
            dataKey="pressure"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3} />
          <Area
            type={cardinal}
            dataKey="uv"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default PressureAndCloudsGraph;
