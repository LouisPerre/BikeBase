const { getBikesByPower } = require('../src/getBikesByPower')

test('The function getBikesByPower should return a object', () => {
    const result = getBikesByPower(9999);
    expect(typeof result).toBe('object')
    expect(result).toEqual([
        {
            "model": "Name test",
            "year_launched": 2023,
            "latest_year": 2023,
            "cylinder": 9999,
            "power_hp": 9999,
            "weight_kg": 1,
            "torque_nm": 9999,
            "type": "Sport",
            "a2": true
        }
        ]
    )
})