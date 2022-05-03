const exrpress = require('express');
const {
  getTransactions,
  createTransactions,
  getDetailTransactions,
  updateTransaction,
  deleteTransactions,
  getTransactionsByUser,
} = require('../controllers/transactions.controller');
const jwtAuth = require('../middlewares/jwtAuth');

const router = exrpress.Router();

router
  .post('/transactions/:id', jwtAuth, createTransactions)
  .get('/transactions', jwtAuth, getTransactions)
  .get('/transactions/:id', jwtAuth, getDetailTransactions)
  .put('/transactions/:id', jwtAuth, updateTransaction)
  .delete('/transactions/:id', jwtAuth, deleteTransactions)
  .get('/userTransactions', jwtAuth, getTransactionsByUser);

module.exports = router;
