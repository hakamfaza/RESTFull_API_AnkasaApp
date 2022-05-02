const express = require('express');
const {
  list, detail, update, remove,
} = require('../controllers/user.controller');
const upload = require('../middlewares/upload');
const jwtAuth = require('../middlewares/jwtAuth');

const router = express.Router();

router
  .get('/user', jwtAuth, list)
  .get('/user/:id', jwtAuth, detail)
  .put('/user/:id', jwtAuth, upload, update)
  .delete('/user/:id', jwtAuth, upload, remove);

module.exports = router;
