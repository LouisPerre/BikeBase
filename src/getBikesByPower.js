const _ = require('lodash')
import bikes from "../data/bikes";

const getBikesByPower = (power_hp, tolerance = 0) => {
  return _.chain(bikes).flatMap(bikes => bikes).filter(bike => _.inRange(bike.power_hp, power_hp - tolerance, power_hp + tolerance + 1)).value()
}

export default getBikesByPower;

