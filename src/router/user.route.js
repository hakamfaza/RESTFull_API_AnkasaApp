const express = require('express');
const { list, detail } = require('../controllers/user.controller');

const router = express.Router();

router
  .get('/user', list)
  .get('/user/:id', detail);

module.exports = router;
