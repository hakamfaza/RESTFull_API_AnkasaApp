const db = require('../config/db');

module.exports = {
  selectAll: () => new Promise((resolve, reject) => {
    db.query('SELECT * FROM users', (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  }),
  selectById: (id) => new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE id=$1', [id], (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  }),
};
