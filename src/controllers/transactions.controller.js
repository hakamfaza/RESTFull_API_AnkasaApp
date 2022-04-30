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
  getDetailTransactions: async (req, res) => {
    try {
      const { id } = req.params;

      const transactions = await transactionsModels.getDetailTransactions(id);
      success(res, {
        code: 200,
        payload: transactions.rows[0],
        message: 'get detail transactions success!',
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: 'internal server error!',
      });
    }
  },
  updateTransaction: async (req, res) => {
    try {
      const setData = {
        product_id: req.body.productId,
        is_paid: req.body.isPaid,
        seat: req.body.seat,
        user_id: req.body.userId,
        id: req.params.id,
      };

      const transactions = await transactionsModels.updateTransaction(setData);
      if (transactions.rowCount > 0) {
        success(res, {
          code: 200,
          payload: transactions,
          message: 'update transaction success!',
        });
      } else {
        failed(res, {
          code: 500,
          payload: null,
          message: 'failed to update!',
        });
      }
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: 'internal server error!',
      });
    }
  },
  deleteTransactions: async (req, res) => {
    try {
      const { id } = req.params;
      const transaction = await transactionsModels.deleteTransactions(id);
      success(res, {
        code: 500,
        payload: transaction,
        message: 'successs delete transactions!',
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
