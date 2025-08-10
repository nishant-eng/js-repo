//Array can take even array as an element -> 2-D Array
const cartoon = ["Ben10","ChottaBheem","Kaalia"];
const film = ["Shahruh Khan","Salman Khan","Vicky Kaushal"];
cartoon.push(film);  //push into the array
// console.log(cartoon);
// console.log(cartoon[3][1]);

//concat is used to add to new array
// const allHeroes = cartoon.concat(film);
// console.log(allHeroes);

//Spread operator => kaanch ka gilaas drop ho gya spread
const all_new_Heroes = [...cartoon, ...film]
// console.log(all_new_Heroes)

//Method-3
const another_array = [1,2,3,[4,5,6],7[6,7,[4,5]]]
const real_another_array = another_array.flat(2)
console.log(real_another_array);

//Data scrapping from web page
console.log(Array.isArray("Nishant"))
console.log(Array.from("Nishant"))
console.log(Array.from({name:"Nishant"}))

let score1 = 100;
let score2 =200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
//returns array from elements
