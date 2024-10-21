var allProducts = [
  {
    name: "농구공",
    description: "농구 황제 마이클 조던이 사용한 농구공입니다",
    price: 100000,
  },
  {
    name: "축구공",
    description: "축구 황제 메시가 사용한 축구공입니다",
    price: 50000,
  },
  {
    name: "야구공",
    description: "박찬호가 던졌던 야구공입니다.",
    price: 75000,
  },
];
function getPrice(arr) {
  var newProducts = [];
  for (var i = 0; i < arr.length; i++) {
    var allPrice = arr[i].price;
    if (allPrice > 60000) {
      newProducts.push(allPrice);
    }
  }
  return newProducts;
}
const expensiveProducts = getPrice(allProducts);
console.log(expensiveProducts);
