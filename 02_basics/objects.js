// Singleton objects -> Literals se nhi banta
// Object Literals
const Sym = Symbol("key1")
const jsUser = {
    name: "Nishant",
    [Sym]: "mySym",
    age: 21,
    location: "Delhi",
    email: "nishat03937@gmail.com",
    isloggedIn: false,
}
jsUser.location = "Germany" 
Object.freeze(jsUser);
jsUser.location = "London" 
// console.log(typeof jsUser[Sym])
console.log(jsUser)
// Output
//  name: 'Nishant',
//   age: 21,
//   location: 'Germany',
//   email: 'nishat03937@gmail.com',
//   isloggedIn: false,
//   [Symbol(key1)]: 'mySym'