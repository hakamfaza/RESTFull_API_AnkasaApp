const transactionsModels = require('../models/transactions.models');

const transactionsController = {
  getTransactions: async (req, res) => {
    try {
      transactionsModels.getTransactions((response) => {
        res.JSON(response);
      });
    } catch (error) {
      res.JSON(error);
    }
  },
};

module.exports = transactionsController;
