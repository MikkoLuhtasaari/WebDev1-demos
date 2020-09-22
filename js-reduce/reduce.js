const products = require("./products.json");

const totalPrice = products.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue.price);
}, 0);

console.log(totalPrice);

const modifiedProducts = products.reduce((accumulator, currentValue) => {
  const newItem = {
    productName: currentValue.name,
    priceWithVAT: (currentValue.price * 1.24).toFixed(2),
  };

  return [...accumulator, newItem];
}, []);

console.log(modifiedProducts);
