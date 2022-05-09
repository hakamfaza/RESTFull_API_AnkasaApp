const express = require('express');
const {
  creteDestination, getDestination, getDetailDestination, updateDestination, deleteDestination,
} = require('../controllers/destination.controller');
const jwtAuth = require('../middlewares/jwtAuth');
const upload = require('../middlewares/upload');

const router = express.Router();

router
  .post('/destination', jwtAuth, upload, creteDestination)
  .get('/destination', jwtAuth, getDestination)
  .get('/destination/:id', jwtAuth, getDetailDestination)
  .put('/destination/:id', jwtAuth, upload, updateDestination)
  .delete('/destination/:id', jwtAuth, deleteDestination);
module.exports = router;
