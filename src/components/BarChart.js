import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PriceRangeBarChart = ({ month }) => {
  const [barChartData, setBarChartData] = useState([]);

  const fetchBarChartData = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/transactions/barchart', {
        params: { month },
      });
      setBarChartData(response.data);
    } catch (error) {
      console.error('Error fetching bar chart data:', error);
    }
  }, [month]);

  useEffect(() => {
    fetchBarChartData();
  }, [fetchBarChartData]);

  return (
    <BarChart width={600} height={300} data={barChartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="_id" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default PriceRangeBarChart;
