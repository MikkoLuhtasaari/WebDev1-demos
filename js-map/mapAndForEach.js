const products = require("./products.json");

// Printing products
products.forEach((product) => console.log(product));

// Getting all the product names
const productNames = products.map((product) => product.name);
console.log(productNames);

// Why we don't use Array.map for logging:
const loggedProducts = products.map((product) => console.log(product));
/*
Output:
[
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined
]

That is because Array.map will always return an array of the same size as the original one.
Using Array.map and not returning anything is an anti-pattern and it should be avoided
*/
console.log(loggedProducts);
