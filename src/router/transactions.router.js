const exrpress = require('express');
const { getTransactions, createTransactions, getDetailTransactions } = require('../controllers/transactions.controller');

const router = exrpress.Router();

router
  .post('/transactions/:id', createTransactions)
  .get('/transactions', getTransactions)
  .get('/transactions/:id', getDetailTransactions);

module.exports = router;
