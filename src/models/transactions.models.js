const db = require('../config/db');

const transactionsModels = {
  getTransactions: () => new Promise((resolve, reject) => {
    db.query('SELECT * FROM transactions', ((err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    }));
  }),
};

module.exports = transactionsModels;
