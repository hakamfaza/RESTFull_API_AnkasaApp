const express = require('express');
const {
  list, detail, update, remove,
} = require('../controllers/user.controller');
const upload = require('../middlewares/upload');

const router = express.Router();

router
  .get('/user', list)
  .get('/user/:id', detail)
  .put('/user/:id', upload, update)
  .delete('/user/:id', upload, remove);

module.exports = router;
