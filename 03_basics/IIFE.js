//Immediately Invoked Function Expression
(function chai(){
    console.log(`DB Connected`)
})(); // ; for ending explicitly function call
( () => {
    console.log(`DB Connected Two`)
})()