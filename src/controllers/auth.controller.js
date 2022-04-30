const crypto = require('crypto');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const authModel = require('../models/auth.model');
const sendEmail = require('../utils/email/sendEmail');
const activateAccountEmail = require('../utils/email/activateAccountEmail');
const { failed, success } = require('../utils/createResponse');
const { APP_NAME, EMAIL_FROM, API_URL } = require('../utils/env');

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

      // send email for activate account
      const templateEmail = {
        from: `"${APP_NAME}" <${EMAIL_FROM}>`,
        to: req.body.email.toLowerCase(),
        subject: 'Activate Your Account!',
        html: activateAccountEmail(`${API_URL}/auth/activation/${token}`),
      };
      sendEmail(templateEmail);

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
