const arr = [1,2,3,4,5,6,7,8,9,10]
//Uniformly applying operation -> use map
const myMap = arr.map( (num) => {return num*10})
// console.log(myMap)

//chaining -> It is the process of Applying multiple methods one after other
const newNums = arr
             .map( ( num ) => {return num * 10})
             .filter((num)=>{return num > 30})
             .map((num) => num + 10)

   console.log(newNums)          