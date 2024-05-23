// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
const totalPrice = products.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity);
}, 0);

function calculateTotalPrice(totalPrice,promotionCode) {
  if (promotionCode === "SALE20") {
    return totalPrice*0.8
  }
  else if (promotionCode === "SALE50") {
    return totalPrice*0.5
  }
  else if ((promotionCode === "")) {
    return totalPrice
  }
}

console.log(calculateTotalPrice(totalPrice,""));
console.log(calculateTotalPrice(totalPrice,"SALE20"));
console.log(calculateTotalPrice(totalPrice,"SALE50"));



