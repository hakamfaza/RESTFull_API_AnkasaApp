// const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');
const { success, failed } = require('../utils/createResponse');
const deleteFile = require('../utils/deleteFile');

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
  update: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await userModel.selectById(id);
      // jika user tidak ditemukan
      if (!user.rowCount) {
        // menghapus photo jika ada
        if (req.file) {
          deleteFile(req.file.path);
        }

        failed(res, {
          code: 404,
          payload: `User with Id ${id} not found`,
          message: 'Update User Failed',
        });
        return;
      }

      // jika update user disertai photo
      let { photo } = user.rows[0];
      if (req.file) {
        if (user.rows[0].photo) {
          // menghapus photo lama
          deleteFile(`public/${user.rows[0].photo}`);
        }
        // mendapatkan name photo baru
        photo = req.file.filename;
      }
      const { email } = user.rows[0]; // email tidak boleh diubah
      await userModel.updateById(id, { ...req.body, photo, email });

      success(res, {
        code: 200,
        payload: null,
        message: 'Update User Success',
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: 'Internal Server Error',
      });
    }
  },
  remove: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userModel.selectById(id);

      // jika user tidak ditemukan
      if (!user.rowCount) {
        failed(res, {
          code: 404,
          payload: `User with Id ${id} not found`,
          message: 'Delete User Failed',
        });
        return;
      }
      await userModel.removeById(id);

      // menghapus photo jika ada
      if (user.rows[0].photo) {
        deleteFile(`public/${user.rows[0].photo}`);
      }

      success(res, {
        code: 200,
        payload: null,
        message: 'Delete User Success',
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
