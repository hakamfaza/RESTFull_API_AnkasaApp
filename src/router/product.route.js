const express = require('express');

const {
  getListProduct, createdProduct, getDetailProduct, updateProduct, deleteProduct,
} = require('../controllers/product.controller');
const jwtAuth = require('../middlewares/jwtAuth');

const route = express.Router();

route
  .get('/product', getListProduct)
  .post('/product', jwtAuth, createdProduct)
  .get('/product-detail/:id', jwtAuth, getDetailProduct)
  .put('/product/:id', jwtAuth, updateProduct)
  .delete('/delete-product/:id', jwtAuth, deleteProduct);

module.exports = route;
