const exrpress = require('express');
const { getTransactions } = require('../controllers/transactions.controller');

const router = exrpress.Router();

router
  .get('/co', getTransactions);

module.exports = router;
