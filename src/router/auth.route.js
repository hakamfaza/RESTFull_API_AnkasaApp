const express = require('express');
const {
  register,
  activation,
  login,
  forgot,
  reset,
} = require('../controllers/auth.controller');
const { isVerified } = require('../middlewares/authorization');

const router = express.Router();

router
  .post('/auth/register', register)
  .get('/auth/activation/:token', isVerified, activation)
  .post('/auth/login', isVerified, login)
  .put('/auth/forgot', isVerified, forgot)
  .put('/auth/reset/:token', isVerified, reset);

module.exports = router;
