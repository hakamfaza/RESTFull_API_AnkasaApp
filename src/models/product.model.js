const db = require('../config/db');

const productModel = {
  getAllProduct: (transit, airline, minprice, maxprice) => new Promise((resolve, reject) => {
    let sql = `SELECT products.origin, products.destination, products.price, products.seat_class,      products.stock,
                products.transit_total, products.flight_date, products.airline_id, products.estimation,
                products.created_date, products.code, products.gate, products.terminal, products.id, airlines.name
				FROM products INNER JOIN airlines ON products.airline_id = airlines.id`;

    if (transit || airline || minprice || maxprice) {
      sql += ' WHERE products.code LIKE \'%%\'';
    }
    if (transit) {
      sql += ` AND products.transit_total = ${transit}`;
    }
    if (airline) {
      sql += ` AND airlines.name='${airline}'`;
    }
    if (minprice) {
      sql += ` AND products.price>=${minprice}`;
    }
    if (maxprice) {
      sql += ` AND products.price<=${maxprice}`;
    }
    db.query(sql, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  storeProduct: (
    origin,
    destination,
    price,
    seat_class,
    stock,
    transit_total,
    flight_date,
    airline_id,
    estimation,
    created_date,
    code,
    gate,
    terminal,
    id,
  ) => new Promise((resolve, reject) => {
    db.query(`INSERT INTO products (origin, destination, price, seat_class, stock,
                transit_total, flight_date, airline_id, estimation,
                created_date, code, gate, terminal, id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9,
                $10, $11, $12, $13, $14)`, [origin, destination, price, seat_class, stock,
      transit_total, flight_date, airline_id, estimation,
      created_date, code, gate, terminal, id], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  detailProduct: (id) => new Promise((resolve, reject) => {
    db.query(`SELECT * FROM products WHERE id='${id}'`, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  updateProduct: (
    origin,
    destination,
    price,
    seat_class,
    stock,
    transit_total,
    flight_date,
    airline_id,
    estimation,
    created_date,
    code,
    gate,
    terminal,
    id,
  ) => new Promise((resolve, reject) => {
    db.query(`UPDATE products SET origin=$1, destination=$2, price=$3, seat_class=$4, stock=$5,
                transit_total=$6, flight_date=$7, airline_id=$8, estimation=$9,
                created_date=$10, code=$11, gate=$12, terminal=$13 WHERE id=$14`, [origin, destination, price, seat_class, stock,
      transit_total, flight_date, airline_id, estimation,
      created_date, code, gate, terminal, id], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  deleteProduct: (id) => new Promise((resolve, reject) => {
    db.query(`DELETE FROM products WHERE id='${id}'`, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
};

module.exports = productModel;
