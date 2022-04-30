const exrpress = require('express');
const {
  getTransactions, createTransactions, getDetailTransactions, updateTransaction, deleteTransactions,
} = require('../controllers/transactions.controller');

const router = exrpress.Router();

router
  .post('/transactions/:id', createTransactions)
  .get('/transactions', getTransactions)
  .get('/transactions/:id', getDetailTransactions)
  .put('/transactions/:id', updateTransaction)
  .delete('/transactions/:id', deleteTransactions);

module.exports = router;
