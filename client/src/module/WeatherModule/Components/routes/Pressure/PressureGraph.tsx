import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import { Type_forPressueGraphProps } from './types';

const cardinal = curveCardinal.tension(0.2);

class PressureAndCloudsGraph extends PureComponent<Type_forPressueGraphProps> {
  static demoUrl = 'https://codesandbox.io/p/sandbox/area-chart-different-shapes-6lwnhy';

  render() {
    const { weatherDataFor_pressure } = this.props;
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
          <XAxis dataKey="name" fontSize={8} angle={-45} />
          <YAxis domain={[950, 1050]} /> 
          <Tooltip />
          <Area type="monotone" dataKey="pressure" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default PressureAndCloudsGraph;
