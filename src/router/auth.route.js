const express = require('express');
const { register, activation, login } = require('../controllers/auth.controller');

const router = express.Router();

router
  .post('/auth/register', register)
  .get('/auth/activation/:token', activation)
  .post('/auth/login', login);

module.exports = router;
