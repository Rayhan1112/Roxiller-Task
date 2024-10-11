import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const TransactionTable = ({ month, setMonth }) => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState(''); // Search state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTransactions = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/transactions/transactions', {
        params: {
          month,
          page,
          search, // Pass the search query as a parameter
        },
      });
      console.log('Fetched transactions:', response.data);
      setTransactions(response.data.transactions || []);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  }, [month, page, search]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <div>
      <h2>Transactions</h2>
      {/* Add a search input field */}
      <input
        type="text"
        placeholder="Search transactions"
        value={search} // Bind input value to search state
        onChange={(e) => setSearch(e.target.value)} // Update search state when user types
      />
      {transactions.length === 0 ? (
        <p>No transactions available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Sold</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction.title}</td>
                <td>{transaction.description}</td>
                <td>{transaction.price}</td>
                <td>{transaction.sold ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default TransactionTable;
