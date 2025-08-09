// "use Strict" //treat all code as newer version
// //It is not important to include this
 
// console.log(typeof null) //undefined
// console.log(typeof undefined) //undefined


//Data type Conversion
let score = "33Nishant"
let score2 = null  //0 after conversion
let score3 = undefined
let valueInNumber = Number(score3)
// console.log(typeof valueInNumber)  //NaN = Not a Number
// console.log(valueInNumber)

let marks = 33.55
let marksinNumber = Number(marks)
// console.log(typeof marksinNumber)

let bool = ""
let Inboolean =Boolean(bool)
// console.log(Inboolean)
//False for empty




//33 = 33
//"33Nishant" = NaN
//Boolean => 0,1
//NULL = 0
//undefined => NaN

//-------------------------------------------------------------------------------------------------------------------------------
//Memory in JS -> Stack(Primitive DataType) Heap(Non Primitive DataType)
let user = "Nishant"
let anotherName = user
anotherName = "Sakshi"
console.log(anotherName)
console.log(user)
//Output : Sakshi 
//Nishant
//Reason : In Stack memory data is copied

