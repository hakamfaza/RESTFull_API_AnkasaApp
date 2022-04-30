const crypto = require('crypto');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const authModel = require('../models/auth.model');
const { failed, success } = require('../utils/createResponse');

module.exports = {
  register: async (req, res) => {
    try {
      const password = await bcrypt.hash(req.body.password, 10);
      const token = crypto.randomBytes(30).toString('hex');
      const insertData = await authModel.register({
        id: uuidv4(),
        ...req.body,
        password,
        createdDate: new Date(),
      });
      await authModel.updateToken(insertData.rows[0].id, token);

      success(res, {
        code: 201,
        payload: null,
        message: 'Register Success',
      });
    } catch (error) {
      console.log(error);
      failed(res, {
        code: 500,
        payload: error.message,
        message: 'Internal Server Error',
      });
    }
  },
};
