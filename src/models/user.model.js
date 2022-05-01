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
  selectByEmail: (email) => new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM users WHERE email=$1',
      [email],
      (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      },
    );
  }),
  updateById: (id, body) => new Promise((resolve, reject) => {
    const {
      name,
      email,
      phone,
      city,
      address,
      postalCode,
      photo = '',
    } = body;

    db.query(
      'UPDATE users SET name=$1, email=$2, phone=$3, city=$4, address=$5, postal_code=$6, photo=$7 WHERE id=$8',
      [name, email, phone, city, address, postalCode, photo, id],
      (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      },
    );
  }),
  removeById: (id) => new Promise((resolve, reject) => {
    db.query('DELETE FROM users WHERE id=$1', [id], (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  }),
  countAll: () => new Promise((resolve, reject) => {
    db.query('SELECT COUNT(*) FROM users', (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  }),
};
