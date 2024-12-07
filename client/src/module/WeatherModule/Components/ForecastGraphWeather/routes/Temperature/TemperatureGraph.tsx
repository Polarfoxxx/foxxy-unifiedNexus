import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { Type_forTemperatureGraphProps } from './types';
import { CustomTooltip } from '../Shared';

class TemperatureGraph extends PureComponent<Type_forTemperatureGraphProps> {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';
  render() {
    const { weatherDataFor_temperature } = this.props;

    //! Transform data for Graph add dynamic color..........................
    const transformedData = weatherDataFor_temperature.map((entry) => ({
      ...entry,
      color:
        entry.temperature < 0
          ? "var(--weatherTemperatureGraph_Cool)"
          : "var(--weatherTemperatureGraph_Warm)",
      secondaryColor:
        entry.feels_like < 0
          ? "var(--weatherFeelsLikeGraph_Cool)"
          : "var(--weatherFeelsLikeGraph_Warm)",
    }));

    //! Extract data for ReferenceLine..........................
    const extractTime = (name: string) => {
      const [_date, _day, time] = name.split(" ");
      return time;
    };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={250}
          data={transformedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            fontSize={9}
            angle={-45}
            tickFormatter={(value) => {
              const parts = value.split(" ");
              return `${parts[0]} ${parts[2]}`;
            }} />
          <YAxis />
          <Tooltip content={
            <CustomTooltip
              weatherParameters="temperature"
              units="°C"
              secWeatherParameters="feels like"
              secUnits="°C" />
          } />
          {transformedData
            .filter((item) => extractTime(item.name) === "0:00:00")
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
                  }} />
              );
            })}
          <Legend wrapperStyle={{
            width: "100%",
            height: "40px",
            fontSize: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }} />
          <Bar
            dataKey="temperature"
            fill="var(--weatherTemperatureGraph_Warm)">
            {transformedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
          <Bar
            dataKey="feels_like"
            fill="var(--weatherFeelsLikeGraph_Warm)">
            {transformedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.secondaryColor} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default TemperatureGraph;
