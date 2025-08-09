const name = 'Nishant'
const repoCount =50
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`)
//Dynamically creating string as object
const Exam = new String("UPSC 2026")
// console.log(Exam[4])
//JS counts Space
// console.log(Exam.__proto__)
//Empty Object
console.log(Exam.length)
//9
// console.log(Exam.toLowerCase())
//upsc 2026,  another charAt,indexOf

const newString = "Ab tera kya hoga re kaaliya"
// console.log(newString.substring(1,4))
// const anotherString = Exam.slice(-9,4)
// console.log(anotherString)

//______REPLACE AND TRIM______

const greetings = "    hello world     ";
console.log(greetings);
console.log(greetings.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

//string to array
console.log(Exam.split(" "));