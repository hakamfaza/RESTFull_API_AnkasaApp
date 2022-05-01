const express = require('express');
const { list, detail, update } = require('../controllers/user.controller');
const upload = require('../middlewares/upload');

const router = express.Router();

router
  .get('/user', list)
  .get('/user/:id', detail)
  .put('/user/:id', upload, update);

module.exports = router;
