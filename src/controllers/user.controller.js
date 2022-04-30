// const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');
const { success, failed } = require('../utils/createResponse');
// const deleteFile = require('../utils/deleteFile');

module.exports = {
  list: async (req, res) => {
    try {
      const users = await userModel.selectAll();

      success(res, {
        code: 200,
        payload: users.rows,
        message: 'Select List User Success',
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: 'Internal Server Error',
      });
    }
  },
  detail: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userModel.selectById(id);

      // jika user tidak ditemukan
      if (!user.rowCount) {
        failed(res, {
          code: 404,
          payload: `User with Id ${id} not found`,
          message: 'Select Detail User Failed',
        });
        return;
      }

      success(res, {
        code: 200,
        payload: user.rows[0],
        message: 'Select Detail User Success',
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: 'Internal Server Error',
      });
    }
  },
};
