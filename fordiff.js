//For of
// for of loop used for Array, map , String, Set 
// This loop not iterable object then use object.keys() and object.values() method using interate

sytax : 

// for (const element of iterable){
//     //code to run for each element 
// }

const numbers = [1,2,3,4];
for (const num of numbers){
    console.log(num);
}

//For in 

//for in loop use array,object etc.

//this loop not use in sets, maps

//Syntax:
// for(const element in iterable){
//     //code to run for each element
// }

//EX:
const info = {name:"Rutuja", age:14}
for (const key in info){
    console.log(info[key]);
}