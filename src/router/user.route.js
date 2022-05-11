const express = require('express');
const {
  list,
  detail,
  update,
  remove,
  updatePhoto,
} = require('../controllers/user.controller');
const upload = require('../middlewares/upload');
const userValidation = require('../validations/user.validation');
const jwtAuth = require('../middlewares/jwtAuth');

const router = express.Router();

router
  .get('/user', jwtAuth, list)
  .get('/user/:id', jwtAuth, detail)
  .put('/user/:id', userValidation.update, jwtAuth, update)
  .put('/user/:id/photo', jwtAuth, upload, updatePhoto)
  .delete('/user/:id', jwtAuth, remove);

module.exports = router;
