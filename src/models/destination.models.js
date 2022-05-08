const db = require('../config/db');

const destinationModels = {
  createDestination: (setData) => new Promise((resolve, reject) => {
    db.query('INSERT INTO destination (id, country, place, image) VALUES ($1, $2, $3, $4)', [setData.id, setData.country, setData.place, setData.image], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  getDestination: () => new Promise((resolve, reject) => {
    db.query('SELECT * FROM destination', (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  getDetailDestination: (id) => new Promise((resolve, reject) => {
    db.query('SELECT * FROM destination WHERE id=$1', [id], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  updateDestination: (setData) => new Promise((resolve, reject) => {
    console.log(setData);
    db.query('UPDATE destination SET country=$1, place=$2, image=$3 WHERE id=$4', [setData.country, setData.place, setData.image, setData.id], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
  deleteDestination: (id) => new Promise((resolve, reject) => {
    db.query('DELETE FROM destination WHERE id=$1', [id], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  }),
};

module.exports = destinationModels;
