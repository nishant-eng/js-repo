// function ka matlab code ko package me band kar diya aur use call karke use kar lenge

//function defn
function sayMyname(){
    console.log("nishant")
}
sayMyname()

function addTwonumbers(number1 , number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2
}
const result = addTwonumbers(3,6);
console.log("Result: ",result);

//using string Interpolation
function loginUserMessage(username){
    return `${username} just logged In!`
}
console.log(loginUserMessage("Amit"));


function CalculateCartPrice(num1){
    return num1;
}
CalculateCartPrice(5));