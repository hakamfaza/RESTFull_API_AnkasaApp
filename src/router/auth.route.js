const express = require('express');
const {
  register, activation, login, forgot, reset,
} = require('../controllers/auth.controller');

const router = express.Router();

router
  .post('/auth/register', register)
  .get('/auth/activation/:token', activation)
  .post('/auth/login', login)
  .put('/auth/forgot', forgot)
  .put('/auth/reset/:token', reset);

module.exports = router;
