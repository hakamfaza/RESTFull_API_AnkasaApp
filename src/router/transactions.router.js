const exrpress = require('express');
const { getTransactions, createTransactions } = require('../controllers/transactions.controller');

const router = exrpress.Router();

router
  .post('/transactions/:id', createTransactions)
  .get('/transactions', getTransactions);

module.exports = router;
