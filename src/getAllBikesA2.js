const _ = require('lodash');
const { bikes } = require('../data/bikes');

module.exports = {
  getAllBikesA2: () => {
    const bikesWithA2 = _.mapValues(bikes, (brandBikes) => _.filter(brandBikes, { 'a2': true }));
    return _.pickBy(bikesWithA2, (brandBikes) => brandBikes.length > 0);
  }
};
