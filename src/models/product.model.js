const db = require('../config/db');

const productModel = {
  getAllProduct: (
    transit,
    airline,
    minprice,
    maxprice,
    origin,
    destination,
    type,
    stock,
  ) => new Promise((resolve, reject) => {
    let sql = 'SELECT products.origin, products.destination, products.price, products.type, products.seat, products.stock, products.transit_total, products.flight_date, products.airline_id, products.estimation, products.created_date, products.code, products.gate, products.terminal, products.id, airlines.name, airlines.photo FROM products INNER JOIN airlines ON products.airline_id = airlines.id';

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
    if (origin) {
      sql += ` AND LOWER(products.origin)='${origin.toLowerCase()}'`;
    }
    if (destination) {
      sql += ` AND LOWER(products.destination)='${destination.toLowerCase()}'`;
    }
    if (type) {
      sql += ` AND LOWER(products.type)='${type.toLowerCase()}'`;
    }
    if (stock) {
      sql += ` AND products.stock>=${stock}`;
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
    seat,
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
    type,
  ) => new Promise((resolve, reject) => {
    db.query(`INSERT INTO products (origin, destination, price, seat, stock,
                transit_total, flight_date, airline_id, estimation,
                created_date, code, gate, terminal, id, type) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9,
                $10, $11, $12, $13, $14)`, [origin, destination, price, seat, stock,
      transit_total, flight_date, airline_id, estimation,
      created_date, code, gate, terminal, id, type], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  countAll: () => new Promise((resolve, reject) => {
    db.query('SELECT COUNT(*) FROM products', (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  detailProduct: (id) => new Promise((resolve, reject) => {
    db.query(`SELECT * FROM products INNER JOIN airlines ON products.airline_id = airlines.id WHERE products.id='${id}'`, (err, result) => {
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
    seat,
    stock,
    transit_total,
    flight_date,
    airline_id,
    estimation,
    created_date,
    code,
    gate,
    terminal,
    type,
    id,
  ) => new Promise((resolve, reject) => {
    db.query(`UPDATE products SET origin=$1, destination=$2, price=$3, seat=$4, stock=$5,
                transit_total=$6, flight_date=$7, airline_id=$8, estimation=$9,
                created_date=$10, code=$11, gate=$12, terminal=$13, type=$14 WHERE id=$15`, [origin, destination, price, seat, stock,
      transit_total, flight_date, airline_id, estimation,
      created_date, code, gate, terminal, id, type], (err, result) => {
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
