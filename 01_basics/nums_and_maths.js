const score = 400
console.log(score)

//object
const balance = new Number(100000)
console.log(balance)

console.log(balance.toLocaleString('en-IN'))

//max value and min value

//++++++++++++++++++Maths++++++++++++++++++++++Library
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.6))

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min+1))+min);