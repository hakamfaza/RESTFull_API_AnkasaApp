const express = require('express');
const { register, activation } = require('../controllers/auth.controller');

const router = express.Router();

router
  .post('/auth/register', register)
  .get('/auth/activation/:token', activation);

module.exports = router;
