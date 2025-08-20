//Immediately Invoked Function Expression
(function chai(){
    console.log(`DB Connected`)
})(); // ; for ending explicitly function call
( () => {
    console.log(`DB Connected Two`)
})()
// Handles global variable conflicts


const iceTea = 800
iceTea>500 ? console.log("Gaand me daal le chai ko") : console.log("Pilaa de pilaa de!")

