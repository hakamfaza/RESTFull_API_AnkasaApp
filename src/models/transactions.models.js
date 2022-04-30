const db = require('../config/db');

const transactionsModels = {
  createTransaction: (setData) => new Promise((resolve, rejectt) => {
    console.log(setData);
    db.query('INSERT INTO transactions (product_id, is_paid, user_id, seat, id) VALUES ($1, $2, $3, $4, $5)', [setData.product_id, setData.is_paid, setData.seat, setData.user_id, setData.id], (err, result) => {
      if (err) {
        rejectt(err);
      }
      resolve(result);
    });
  }),
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
