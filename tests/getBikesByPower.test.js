const { getBikesByPower } = require('../src/getBikesByPower')

test('The function getBikesByPower should return a object', () => {
    const result = getBikesByPower(128);
    expect(typeof result).toBe('object')
    expect(result).toEqual({
        motorcycles: [
            {
                model: 'Ninja ZX-6R',
                year_launched: 1995,
                latest_year: 1998,
                cylinder: 636,
                power_hp: 128,
                weight_kg: 196,
                torque_nm: 70.8,
                type: 'Sport',
                a2: false
            }
        ]
    }
    )
})