const { bikes } = require("../data/bikes");

err = "brand must be a string";

module.exports = {
  filterByBrands: (brand) => {
    if (typeof brand !== "string") return { err };
    return bikes[brand];
  },
};
