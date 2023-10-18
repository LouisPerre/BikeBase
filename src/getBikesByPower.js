// const fs = require('fs')
const _ = require('lodash')
const { bikes } = require('../data/bikes')

module.exports = {
    getBikesByPower: (power_hp, tolerance = 0) => {
        const data = bikes;

        const filteredMotorcycles = [];

        _.forEach(data, (motorcycles) => {
            _.forEach(motorcycles, (motorcycle) => {
                if (_.inRange(motorcycle.power_hp, power_hp - tolerance, power_hp + tolerance + 1)) {
                    filteredMotorcycles.push(motorcycle)
                }
            })
        })

        const filteredData = { motorcycles: filteredMotorcycles }

        return filteredData;
    }
}