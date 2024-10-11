import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const CategoryPieChart = ({ month }) => {
  const [pieChartData, setPieChartData] = useState([]);

  const fetchPieChartData = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/transactions/piechart', {
        params: { month },
      });
      setPieChartData(response.data);
    } catch (error) {
      console.error('Error fetching pie chart data:', error);
    }
  }, [month]);

  useEffect(() => {
    fetchPieChartData();
  }, [fetchPieChartData]);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={pieChartData}
        dataKey="count"
        nameKey="_id"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
      >
        {pieChartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CategoryPieChart;
