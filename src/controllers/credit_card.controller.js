/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
const { CreditCardModel } = require('../models/credit_card.model');
const { success, failed } = require('../utils/createResponse');

const CreditCardController = {
  selectAll: async (req, res) => {
    try {
      const data = await CreditCardModel.getAllCreditCards();
      if (data.rowCount > 0) {
        return success(res, data);
      }
      return res.json({
        message: 'Sorry, no recipes found',
      });
    } catch (error) {
      return failed(res, error.message);
    }
  },
  selectByDetail: async (req, res) => {
    try {
      const data = await CreditCardModel.getCreditCardDetail();
      return success(res, data);
    } catch (error) {
      return failed(res, error.message);
    }
  },
  insert: async (req, res) => {
    const {
      number,
      name,
      user_id,
      id
    } = req.body;

    const creditCardNumberCheck = !number || number === '';
    const creditCardNameCheck = !name || name === '';
    const userIDCheck = !user_id || user_id === '';
    const creditCardIDCheck = !id || id === '';

    if (
      creditCardNumberCheck && creditCardNameCheck && userIDCheck && creditCardIDCheck
    ) {
      return res.status(400).json({
        status: 'failed',
        message: 'All recipe data must be filled',
      });
    }

    try {
      const data = await CreditCardModel.insertCreditCard(
        number,
        name,
        user_id,
        id
      );
      return success(res, data);
    } catch (error) {
      return failed(res, error.message);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const {
        number, name, user_id
      } = req.body;
      const data = await CreditCardModel.updateCreditCard(
        number,
        name,
        user_id,
        id
      );
      success(res, data);
    } catch (error) {
      failed(res, error.message);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await CreditCardModel.deleteCreditCard(id);
      success(res, data);
    } catch (error) {
      failed(res, error.message);
    }
  }
};

module.exports = { 
  CreditCardController,
};
