const _ = require('lodash')
const { bikes } = require('../data/bikes')

module.exports = {
  getBikesByPower: (power_hp, tolerance = 0) => _.chain(bikes).flatMap(bikes => bikes).filter(bike => _.inRange(bike.power_hp, power_hp - tolerance, power_hp + tolerance + 1)).value()
}