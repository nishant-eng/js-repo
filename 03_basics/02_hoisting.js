//This keyword and arrow
//this is for current context
const user = {
    username:"Nishant",
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
    }
}
//arrow function
//explicit definition
const addTwo = (num1 , num2) => {
    return num1 + num2;
}
const addone = (num1,num2) => (num1+num2)
console.log(addTwo(3,4)) 