const { product, status } = require('../models');
const getData = async (req, res) => {
  try {
    const data = await product.findAll({
      include: [
        {
          model: status,
          as: 'product_status'
        }
      ]
    });
    res.status(200).json({
      message: 'semua data',
      data,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
}
const addData = async (req, res) => {
  const { productID, productName, amount, customerName, status, transactionDate, createBy, createOn } = req.body
  if (!productID, !productName, !amount, !customerName, !status, !transactionDate, !createBy, !createOn) {
    res.status(401).json({
      message: 'the row cannot be empty',
    });
  }
  try {
    const data = await product.create({
      productID, productName, amount, customerName, status, transactionDate, createBy, createOn
    });
    res.status(200).json({
      message: 'data success  added'
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
}
const deleteData = async (req, res) => {
  try {
    const {id} = req.params
    const data = await product.destroy({ where: { id, }, });
    res.status(200).json({
      message: 'data success  deleted',
      data,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
}
const updateData = async (req, res) => {
  try {
    const {id} = req.params
    const data = await product.update(req.body, { where: { id, }, });
    res.status(200).json({
      message: 'data success updated',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
}

module.exports = { getData, addData, deleteData, updateData }