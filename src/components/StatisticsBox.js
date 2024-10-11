import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const StatisticsBox = ({ month }) => {
  const [statistics, setStatistics] = useState({});

  const fetchStatistics = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/transactions/statistics', {
        params: { month },
      });
      setStatistics(response.data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  }, [month]);

  useEffect(() => {
    fetchStatistics();
  }, [fetchStatistics]);

  return (
    <div>
      <h2>Statistics for {month}</h2>
      <p>Total Sale Amount: {statistics.totalSaleAmount}</p>
      <p>Total Sold Items: {statistics.totalSoldItems}</p>
      <p>Total Not Sold Items: {statistics.totalNotSoldItems}</p>
    </div>
  );
};

export default StatisticsBox;
