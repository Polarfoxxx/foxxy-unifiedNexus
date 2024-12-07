import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Type_forTemperatureDayGraphProps } from './types';


class TemperatureDayGraph extends PureComponent<Type_forTemperatureDayGraphProps> {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  render() {
    const { weatherDataFor_dayTemperature } = this.props;

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={250}
          data={weatherDataFor_dayTemperature}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={12}/>
          <YAxis />
          <Tooltip />
          <Legend wrapperStyle={{ width:"100%", height:"40px", fontSize: "15px", display: "flex", justifyContent: "center", alignItems:"end"}} />
          <Bar dataKey="temperature" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="feels_like" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
export default TemperatureDayGraph;