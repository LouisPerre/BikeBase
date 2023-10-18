
# Motorcycle Catalog Functions

This repository contains a set of JavaScript functions to manage a motorcycle catalog. Here's an overview of the different functionalities available:


## getAllBikes

```javascript
const getAllBikes = () => {
  return bikes;
}

```
This function returns the entire catalog of available motorcycles.


## getAllBikesA2

```javascript
const getAllBikesA2 = () => {
    const bikesWithA2 = _.mapValues(bikes, (brandBikes) => _.filter(brandBikes, { 'a2': true }));
    return _.pickBy(bikesWithA2, (brandBikes) => brandBikes.length > 0);
}
```

This function returns an object containing only motorcycles that comply with the A2 standard (for new riders).

## getBikesByBrand

```javascript
const getBikesByBrand = (brand) => {
    const err = "brand must be a string";
    if (typeof brand !== "string") return { err };

    return bikes[brand];
}
```

This function takes a brand name as input and returns an array of motorcycles from that specific brand. It returns an error if the brand name is not a string.

## getBikesByPower

```javascript
const getBikesByPower = (power_hp, tolerance = 0) => {
    return 
        _.chain(bikes)
        .flatMap(bikes => bikes)
        .filter(bike => _.inRange(bike.power_hp, power_hp - tolerance, power_hp + tolerance + 1))
        .value()
}
```

This function takes horsepower (HP) as input, along with a tolerance (defaulting to 0). It returns an array of motorcycles whose power falls within the specified range (±tolerance).

## getBikesByYear

```javascript
const getBikesByYear = (year) => {
    return 
        _.chain(bikes)
        .map(bikeList => bikeList)
        .flatten()
        .filter(bike => bike.year_launched < year)
        .value()
}

```

This function takes a year as input and returns an array of motorcycles launched before that specific year.

Feel free to explore these functions and use them as per your requirements!
