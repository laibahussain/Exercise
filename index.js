const products = 
[
  { id: 1, name: "Laptop", category: "Electronics",price: 1500, quantity: 5, isAvailable:true },
  { id: 2, name: "Smartphone", category: "Electronics",price: 800, quantity: 10, isAvailable: true },
  { id: 3, name: "Table", category: "Electronics", price: 500, quantity: 0, isAvailable: false },
  { id: 4, name:"Headphones", category: "Accessories",price: 100, quantity: 15, isAvailable: true },
  { id: 5, name:"Keyboard", category: "Accessories", price: 50, quantity: 8, isAvailable: true },
  { id: 6, name: "Mouse", category: "Accessories", price: 25, quantity: 20, isAvailable: true },
  { id: 7, name: "Monitor", category:"Electronics", price: 300, quantity: 7, isAvailable: true } 
]

// // 1. Find - Locate a specific product by name.

let prpoduct = products.find((x)=>{
  return (x.name === "Monitor")
}) 
console.log(prpoduct)

// we can also find a name using map

let pro = products.map((x)=> x.name)
console.log(pro)

// // 2. Filter - Get all available products in the Electronics category.

// use of filter (it prints all the object having "Electronics" category)

let product = products.filter((x)=>{
  return (x.category === "Electronics")
})
console.log(product)

// print price from low to high

let product1 = products.sort((low,high)=>{
  return low.price - high.price
})
console.log(product1)

// print price from high to low

let product2 = products.sort((low,high)=>{
  return high.price - low.price
})
console.log(product2)

// // 3. Map - Apply a discount to each product's price and return the updated product list.

let updated = products.map((x)=>{
  let discount = x.price * 0.2
  let total = x.price - discount
  return ({
    ...x , price:total
  })
})
console.log(updated)

// by using spread operator we can destructure an array

let array = [22,33,44,55,66,7777]
let [a,b,c,d,...e] = [...array]
console.log(e)

// 6. Combining Methods - Increase the quantity of each accessory by 5.

let combine = products.filter((x) => x.category === "Accessories");
let increase = combine.map((x) => {
  let afterincrease = x.quantity + 5
  return {
    ...x, quantity: afterincrease
  };
});
console.log(increase);

// reduce method also known as folding method

let arrayy = [1,1,2,2,3,3,44,4,5,6,6,7,78,8,9,0]
let accumulate = arrayy.reduce((accumulator,current)=>{
  let sum = accumulator + current
  return sum
},0)
console.log(accumulate)

// sum of all the prices of products
// this method is used to total add to cart products

let add = products.reduce((acc,curr)=>{
  let sum = acc + curr.price
  return sum
},0)
console.log(add)

// 7. Sorting and Slicing - Get the top 3 most expensive products.

let sorted = products.sort((low,high)=>high.price - low.price)
let expensive = sorted.slice(0,3)
console.log(expensive)

// object having prices greater than 500 and smaller than 1000

let produc = products.filter((x)=>x.price > 500 && x.price < 1000)
    console.log(produc)

