const express = require('express');
const {
  list,
  detail,
  input,
  update,
  deleted,
  control,
} = require('../controllers/airlines.controller');
const airlineValidation = require('../validations/airline.validation');

const router = express.Router();
const jwtAuth = require('../middlewares/jwtAuth');
const upload = require('../middlewares/upload');

router
  .get('/airlines', jwtAuth, list)
  .get('/airlines/:id', jwtAuth, detail)
  .post('/airlines', jwtAuth, airlineValidation.post, upload, input)
  .put('/airlines/:id', jwtAuth, airlineValidation.post, upload, update)
  .delete('/airlines/:id', jwtAuth, deleted)

  // suspend
  .put('/airlines-control', jwtAuth, control);

module.exports = router;
