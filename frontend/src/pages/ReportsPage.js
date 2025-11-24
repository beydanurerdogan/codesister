// src/pages/ReportsPage.jsx
import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const data = [
  { month: "Ocak", sales: 4000 },
  { month: "Şubat", sales: 3000 },
  { month: "Mart", sales: 5000 },
  { month: "Nisan", sales: 4500 },
  { month: "Mayıs", sales: 6000 },
];

const ReportsPage = () => {
  return (
    <div>
      <h2>Satış Raporları</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#7a7fff" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReportsPage;
