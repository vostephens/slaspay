import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface CurrencyData {
  month: string;
  currency1: number;
  currency2: number;
}

interface LineChartProps {
  data: CurrencyData[];
}

const CurrencyLineChart: React.FC<LineChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="currency1" stroke="#0097A7" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="currency2" stroke="#F4511E" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CurrencyLineChart;
