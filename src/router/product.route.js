const express = require('express');

const {
  getListProduct, createdProduct, getDetailProduct, updateProduct, deleteProduct,
} = require('../controllers/product.controller');
const jwtAuth = require('../middlewares/jwtAuth');

const route = express.Router();

route
  .get('/product', jwtAuth, getListProduct) // solved
  .post('/product', jwtAuth, createdProduct) // solved
  .get('/product-detail/:id', jwtAuth, getDetailProduct) // solved
  .put('/product/:id', jwtAuth, updateProduct) // solved
  .delete('/delete-product/:id', jwtAuth, deleteProduct); // solved

module.exports = route;
