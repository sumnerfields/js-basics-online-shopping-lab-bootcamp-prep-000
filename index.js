var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
item = {itemName: toString(item), itemPrice: Math.floor((Math.random() * 100) + 1)};
cart.push(item)
  return item[Object.keys(item)[0]] + " has been added to your cart."}

function viewCart() {
if (cart.length === 0) {response = "Your shopping cart is empty."}
else (for (i = 0; i < cart.length; i++)
{}
}

function total() {
  var prices = [];
cart.forEach(function(obj){
    prices.push(obj.itemPrice);
})
totalPrice = prices.reduce(accumulator, 0);
return totalPrice
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
