const _ = require('lodash');
import bikes from "../data/bikes";

const getBikesByYear = (year) => {
  return _.chain(bikes).map(bikeList => bikeList).flatten().filter(bike => bike.year_launched < year).value()
}

export default getBikesByYear;
