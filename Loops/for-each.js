const Mauryas = ["Chandragupta","Bindusara","Ashoka"]
//accessing array
Mauryas.forEach(function (val) {
//    console.log(val);
})
Mauryas.forEach((item)=>{
    // console.log(item)
})

function PrintMe(item){
    // console.log(item)
}
Mauryas.forEach(PrintMe)

Mauryas.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})
 const coding = ["js","ruby","python","C++"]
const values = coding.forEach( (item) => {
//   console.log(item);
})
// console.log(values)



//Filter
const nums = [1,2,3,4,5,6,7,8,9];
const newNums = nums.filter(( val ) =>  val > 5 )
console.log(newNums);


//Books example
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
//   const UserBooks = books.filter( (bks) => bks.publish === 1999 )
  let UserBooks = books.filter( (bks) => bks.genre === 'Science' )
UserBooks = books.filter ((bk)=>{return bk.genre === 'History' && bk.edition === 2007})
  console.log(UserBooks);