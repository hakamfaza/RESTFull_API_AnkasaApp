const express = require('express')

const { getListProduct, createdProduct, getDetailProduct, updateProduct, deleteProduct } = require('../controllers/product.controller')

const route = express.Router()

route
    .get('/product', getListProduct) //solved
    .post('/product', createdProduct) //solved
    .get('/product-detail/:id', getDetailProduct) //solved
    .put('/product/:id', updateProduct) //solved
    .delete('/delete-product/:id', deleteProduct) //solved

module.exports = route