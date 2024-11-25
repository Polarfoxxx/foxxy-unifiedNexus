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
} from 'recharts';
import { Type_forWindGraphProps } from './types';
import { CustomTooltip } from './../Shared';


class WindGraph extends PureComponent<Type_forWindGraphProps> {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-v3w7s9';

  render() {
    const { weatherDataFor_wind } = this.props;


    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={weatherDataFor_wind}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={8} angle={-45} padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ width: "100%", height: "40px", fontSize: "15px", display: "flex", justifyContent: "center", alignItems: "end" }} />
          <Line type="monotone" dataKey="wind" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default WindGraph;
