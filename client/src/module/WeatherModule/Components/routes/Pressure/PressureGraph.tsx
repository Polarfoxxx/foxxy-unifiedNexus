import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend
} from 'recharts';
import { Type_forPressueGraphProps } from './types';
import { CustomTooltip } from '../Shared';

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
          <YAxis domain={[950, 1070]} />
          <Tooltip content={
            <CustomTooltip
              weatherParameters='pressure'
              units={"hPa"} />
          } />
          <Legend wrapperStyle={{
            width: "100%",
            height: "40px",
            fontSize: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }} />
          {weatherDataFor_pressure.filter((item) => extractTime(item.name) === "0:00:00")
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
            dataKey="pressure"
            stroke="var(--weatherPressureLine)"
            fill="var(--weatherPressureLine)"
            fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default PressureAndCloudsGraph;
