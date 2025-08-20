// for of loop
const greetings = "Hello world!"
for(const greet of greetings)
{
    if(greet == " ")
        continue;
    // console.log(`Each Char is: ${greet}`)

}
//In case of Maps -> Maps are data structures that contain unique data in key value pair form
const map = new Map()
map.set('IN',"India")
map.set('Na','Namibia')
map.set("t&t","Trinidad and Tobago")
//console.log(map);

for(const [key,value] of map){
    // console.log(key,":-",value)
}
//objects are non Iterable through for-of loop


// for in loop 
const Empires = {
   chola: "Golden Empire of South India",
   Gupta: "Golden Empire of India",
   Maurya: "Highly Centralised Empire"
}
for(const key in Empires){
    // console.log(`${key} Attributed to ${Empires[key]}`)
}

const Empire = ["Chola","Gupta","Maurya"]
for(const key in Empire){
    console.log(Empire[key])
}
