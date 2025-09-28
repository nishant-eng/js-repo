const promiseOne = new Promise(function(resolve,reject){
    //Do an Async Await
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
}, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const Promise3 = new Promise(function(resolve,reject){
       setTimeout(function(){
           resolve({username:"Chai", email: "nihant@gmail.com"})
       },1000)
})

Promise3.then(function(name){
    console.log(name);
})

const Promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
         let error = true
         if(!error){
            resolve({usename:"Nishant",password : 123})
         } else{
            reject('ERROR: Something went wrong')
         }
    },2000)
})
Promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("Promise is either resolved or rejected"))


const Promise5 = new Promise((resolve,reject)=>{
    setTimeout(function(){
         let error = true
         if(!error){
            resolve({usename:"Javascript",password : 123})
         } else{
            reject('ERROR: JS went wrong')
         }
    },2000)
})

async function ConsumePromise(){
    try {
        const response = await Promise5
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
ConsumePromise()