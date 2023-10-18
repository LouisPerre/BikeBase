const { bikes } = require("../data/bikes");

module.exports = {
  getBikesByBrand: (brand) => {
    const err = "brand must be a string";
    if (typeof brand !== "string") return { err };

    return bikes[brand];
  },
};
