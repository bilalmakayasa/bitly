'use strict';
module.exports = (sequelize, DataTypes) => {
  const guest = sequelize.define('guest', {
    url: DataTypes.STRING,
    short_url: DataTypes.STRING
  }, {});
  guest.associate = function(models) {
    // associations can be defined here
  };
  return guest;
};