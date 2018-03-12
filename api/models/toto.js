'use strict';
module.exports = (sequelize, DataTypes) => {
  var toto = sequelize.define('toto', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  toto.associate = function(models) {
    // associations can be defined here
  };
  return toto;
};