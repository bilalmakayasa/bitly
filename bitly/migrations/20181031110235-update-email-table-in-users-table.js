'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', ['email'], {
      type: 'unique'
    })

    return queryInterface.changeColumn('Users', 'email', {
      type:Sequelize.STRING,
      unique: true
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Users', ['email'], {
      type: 'unique'
    })
    return queryInterface.changeColumn('Users', 'email', {
      type:Sequelize.STRING,
      unique: false
    })
  }
};
