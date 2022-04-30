const { v4: uuidv4 } = require('uuid');
const transactionsModels = require('../models/transactions.models');
const { success, failed } = require('../utils/createResponse');

const transactionsController = {
  createTransactions: async (req, res) => {
    try {
      const id = uuidv4();

      const setData = {
        product_id: req.params.id,
        is_paid: req.body.isPaid,
        seat: req.body.seat,
        user_id: req.body.userId,
        id,
      };

      const transactions = await transactionsModels.createTransaction(setData);
      success(res, {
        code: 200,
        payload: transactions,
        message: 'success create transactions!',
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: 'internal server error!',
      });
    }
  },
  getTransactions: async (req, res) => {
    try {
      const transactions = await transactionsModels.getTransactions();
      success(res, {
        code: 200,
        payload: transactions.rows,
        message: 'get all transactions success!',
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: 'internal server error!',
      });
    }
  },
};

module.exports = transactionsController;
