const express = require('express');

const {
  getListProduct,
  createdProduct,
  getDetailProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');
const jwtAuth = require('../middlewares/jwtAuth');
const productValidation = require('../validations/product.validation');

const route = express.Router();

route
  .get('/product', getListProduct)
  .post('/product', jwtAuth, productValidation.post, createdProduct)
  .get('/product-detail/:id', jwtAuth, getDetailProduct)
  .put('/product/:id', jwtAuth, productValidation.post, updateProduct)
  .delete('/delete-product/:id', jwtAuth, deleteProduct);

module.exports = route;
