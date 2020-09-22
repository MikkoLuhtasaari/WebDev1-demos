const products = require("./products.json");
const lowOnStockLimit = 100;

const lowOnStock = products.filter(
  (product) => product.numberInStock < lowOnStockLimit
);

console.log(lowOnStock);

const lowOnStockNames = products
  .filter((product) => product.numberInStock < lowOnStockLimit)
  .map((product) => product.name);

console.log(lowOnStockNames);
