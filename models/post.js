const { STRING } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      postTiltle: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      postnum: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      writer : {
        type: Sequelize.STRING(200),
        allowNull: false,

      }
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  
};