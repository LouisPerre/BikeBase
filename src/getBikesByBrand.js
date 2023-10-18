import bikes from "../data/bikes";

const getBikesByBrand = (brand) => {
  const err = "brand must be a string";
  if (typeof brand !== "string") return { err };

  return bikes[brand];
}

export default getBikesByBrand;
