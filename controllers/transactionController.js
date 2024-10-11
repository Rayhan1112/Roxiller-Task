const axios = require('axios');
const Transaction = require('../models/transactionModel');

// Seed data function
const fetchDataAndSeed = async (req, res) => {
  try {
    const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    await Transaction.deleteMany({}); // Clear existing data (optional)
    await Transaction.insertMany(data); // Insert new data
    res.status(200).json({ message: 'Data seeded successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get transactions function
const getTransactions = async (req, res) => {
  // Your logic for getting transactions
};

// Get statistics function
const getStatistics = async (req, res) => {
  // Your logic for getting statistics
};

// Get bar chart data function
const getBarChartData = async (req, res) => {
  // Your logic for getting bar chart data
};

// Get pie chart data function
const getPieChartData = async (req, res) => {
  // Your logic for getting pie chart data
};

// Export functions
module.exports = {
  fetchDataAndSeed,
  getTransactions,
  getStatistics,
  getBarChartData,
  getPieChartData,
};
