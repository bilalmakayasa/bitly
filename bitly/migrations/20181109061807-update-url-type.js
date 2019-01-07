'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('shorts', ['url'], {
      type: 'unique',
      name: 'custom_unique_constraint_name'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('shorts', ['url'], {
      type: 'unique',
      name: 'custom_unique_constraint_name'
    })
  }
};
