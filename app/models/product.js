'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.status, { as: 'product_status', foreignKey: 'status' });
    }
  }
  product.init({
    productID: DataTypes.STRING,
    productName: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    customerName: DataTypes.STRING,
    status: DataTypes.INTEGER,
    transactionDate: DataTypes.DATE,
    createBy: DataTypes.STRING,
    createOn: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};