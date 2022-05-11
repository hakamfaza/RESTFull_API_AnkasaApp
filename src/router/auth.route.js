const express = require('express');
const {
  register,
  activation,
  login,
  forgot,
  reset,
} = require('../controllers/auth.controller');
const authValidation = require('../validations/auth.validation');
const { isVerified } = require('../middlewares/authorization');

const router = express.Router();

router
  .post('/auth/register', authValidation.register, register)
  .get('/auth/activation/:token', activation)
  .post('/auth/login', isVerified, authValidation.login, login)
  .put('/auth/forgot', isVerified, authValidation.forgot, forgot)
  .put('/auth/reset/:token', authValidation.reset, reset);

module.exports = router;
