const express = require('express');
const {
  list,
  detail,
  input,
  update,
  deleted,
  control,
} = require('../controllers/airlines.controller');

const router = express.Router();
const jwtAuth = require('../middlewares/jwtAuth');
const upload = require('../middlewares/upload');

router
  .get('/airlines', jwtAuth, list)
  .get('/airlines/:id', jwtAuth, detail)
  .post('/airlines', jwtAuth, upload, input)
  .put('/airlines/:id', jwtAuth, upload, update)
  .delete('/airlines/:id', jwtAuth, deleted)

  // suspend
  .put('/airlines-control', jwtAuth, control);

module.exports = router;
