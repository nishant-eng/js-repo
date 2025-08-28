# Solution-1
```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body')
buttons.forEach(function(button){
  console.log(button);
  document.addEventListener('click',function(event){
    console.log(event);
    console.log(event.target);
    if(event.target.id === 'grey'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'yellow'){
      body.style.backgroundColor = event.target.id;
    }
  });

});
```
# Solution 2
``` javascript
   const form = document.querySelector('form');
form.addEventListener('submit',function(event){
  event.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
    
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
 }
  else{
      const bmi = (weight/((height*height)/10000)).toFixed(2);
      results.innerHTML = `<span>${bmi}</span>`
      if(bmi < 18.6){
        results.innerHTML = `<span>Kuch kha pee le Margille<span>`
      }
      else if(18.6< bmi < 24.9 ){
          results.innerHTML = `<span>aap thik ho<span>`
      }
      else if(bmi > 24.9){
        results.innerHTML = `<span>Gym bhag jaa Jaldi Mote<span>`
      }
    }


});
```
# Solution 3
``` javascript
const clock = document.getElementById('clock');
setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000);
```