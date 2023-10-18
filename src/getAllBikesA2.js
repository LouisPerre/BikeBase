const _ = require('lodash');
import bikes from "../data/bikes";

const getAllBikesA2 = () => {
  const bikesWithA2 = _.mapValues(bikes, (brandBikes) => _.filter(brandBikes, { 'a2': true }));
  return _.pickBy(bikesWithA2, (brandBikes) => brandBikes.length > 0);
}

export default getAllBikesA2;
