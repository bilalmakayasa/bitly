'use strict';
module.exports = (sequelize, DataTypes) => {
  const short = sequelize.define('short', {
    title: DataTypes.STRING,
    short_url: DataTypes.STRING,
    url: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  short.associate = function(models) {
    short.hasMany(models.tracking,{foreignKey: 'short_url'})
    // associations can be defined here
  };
  return short;
};