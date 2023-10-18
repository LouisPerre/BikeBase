const _ = require('lodash');
const { bikes } = require('../data/bikes');

module.exports = {
  getBikesByYear: (year) => _.chain(bikes).map(bikeList => bikeList).flatten().filter(bike => bike.year_launched < year).value()
};
