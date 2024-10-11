const express = require('express');
const {
  fetchDataAndSeed,
  getTransactions,
  getStatistics,
  getBarChartData,
  getPieChartData,
} = require('../controllers/transactionController'); // Check this path and function names

const router = express.Router();

router.get('/seed', fetchDataAndSeed); // Ensure fetchDataAndSeed is defined
router.get('/transactions', getTransactions); // Ensure getTransactions is defined
router.get('/statistics', getStatistics); // Ensure getStatistics is defined
router.get('/barchart', getBarChartData); // Ensure getBarChartData is defined
router.get('/piechart', getPieChartData); // Ensure getPieChartData is defined

module.exports = router;
