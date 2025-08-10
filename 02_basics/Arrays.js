const array = [1,2,3,"Nishant",true]
//O-based Indexing
//resizable,Mix data type
//Cant be accessed using arbitrary string
// Makes Shallow copies => Copy properties same reference as Original
//Deep copy => Properties do not share same reference
const myHeroes = ["chottaBheem","Kaalia"]
const myArr = new Array(1,2,3,4,5)
console.log(typeof myArr) //Object

//Array Methods

myArr.push(6)
myArr.pop(3)

array.unshift(9) //to add in start
array.shift()
console.log(array);
//No shift and Unshift Operation is allowed in Objects
console.log(myArr.includes(9))
console.log(myArr.indexOf(9))


//Important
const newArr = myArr.join() //Join bindes array into string
console.log(typeof newArr)
const myn1 = myArr.slice(1,4); //end is not included and it doesnt change original array
console.log(myn1)
console.log("A",myArr)
const myn2=myArr.splice(1,4); //It manipulated the original array, removed the range elements from original
console.log("B",myArr);
console.log(myn2);
