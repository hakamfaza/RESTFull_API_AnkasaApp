const db = require('../config/db');

const transactionsModels = {
  createTransaction: (setData) => new Promise((resolve, rejectt) => {
    db.query('INSERT INTO transactions (product_id, is_paid, user_id, seat, id) VALUES ($1, $2, $3, $4, $5)', [setData.product_id, setData.is_paid, setData.user_id, setData.seat, setData.id], (err, result) => {
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
  getTransactionByUser: (userId) => new Promise((resolve, reject) => {
    db.query('SELECT * FROM transactions WHERE user_id=$1', [userId], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  getBookingDetail: (id) => new Promise((resolve, reject) => {
    db.query('SELECT airlines.name as airline, airlines.photo, products.origin, products.destination, products.code, products.terminal, products.gate, products.flight_date FROM transactions INNER JOIN products ON transactions.product_id = products.id INNER JOIN airlines ON transactions.airlines_id = airlines.id WHERE transactions.id=$1', [id], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
};

module.exports = transactionsModels;
