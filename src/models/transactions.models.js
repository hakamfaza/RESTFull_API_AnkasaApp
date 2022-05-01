const db = require('../config/db');

const transactionsModels = {
  createTransaction: (setData) => new Promise((resolve, rejectt) => {
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
  getDetailTransactions: (id) => new Promise((resolve, reject) => {
    db.query('SELECT * FROM transactions WHERE id=$1', [id], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  updateTransaction: (setData) => new Promise((resolve, reject) => {
    db.query('UPDATE transactions SET is_paid=$1, seat=$2 WHERE product_id=$3 AND user_id=$4 AND id=$5', [setData.is_paid, setData.seat, setData.product_id, setData.user_id, setData.id], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  deleteTransactions: (id, userId) => new Promise((resolve, reject) => {
    db.query('DELETE FROM transactions WHERE id=$1 AND user_id=$2', [id, userId], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
};

module.exports = transactionsModels;
