const { bikes } = require("../data/bikes");

function sayHello() {
  return "Hello";
}

function showBikes() {
  console.log(bikes.kawasaki);
}

module.exports.sayHello = sayHello;
module.exports.showBikes = showBikes;
