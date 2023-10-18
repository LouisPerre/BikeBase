const _ = require('lodash')
const { bikes } = require('../data/bikes')

module.exports = {
  getAllBikesA2: () => _.mapValues(bikes, (brandBikes) => _.filter(brandBikes, { 'a2': true }))
}