'use strict';
module.exports = (sequelize, DataTypes) => {
  const tracking = sequelize.define('tracking', {
    user_id: DataTypes.INTEGER,
    short_url: DataTypes.STRING,
    ip_adress: DataTypes.STRING,
    refferer_url: DataTypes.STRING
  }, {});
  tracking.associate = function(models) {
    // associations can be defined here
  };
  return tracking;
};