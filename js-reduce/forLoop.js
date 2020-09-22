const products = require("./products.json");

let totalPrice = 0;

// Calculate the total price
for (let i = 0; i < products.length; i++) {
  totalPrice += products[i].price;
}

console.log(totalPrice);

let modifiedProducts = [];

for (let i = 0; i < products.length; i++) {
  const newProduct = {
    productName: products[i].name,
    priceWithVAT: (products[i].price * 1.24).toFixed(2),
  };

  modifiedProducts.push(newProduct);
}

console.log(modifiedProducts);
