const _ = require('lodash')
const { bikes } = require('../data/bikes')

module.exports = {
  getBikesByPower: (power_hp, tolerance = 0) => {
    const data = bikes;

    const filteredMotorcycles =
      _.chain(data)
        .flatMap(motorcycles => motorcycles)
        .filter(motorcycle =>
          _.inRange(motorcycle.power_hp, power_hp - tolerance, power_hp + tolerance + 1))
        .value();

    return { motorcycles: filteredMotorcycles }
  }
}