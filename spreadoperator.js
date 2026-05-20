//There are 5 types of Spread Operator

/*1. Clone Array - 
[...arr]

2. Merge Array - 

[...arr1, ...arr2]

3.Clone Object -

{...obj}

4.Merge Object -

{...obj1, ...obj2}

5.function arrgument array -

fn(...arr)

*/

//Clone Array & Merge Array

// let arr = [1,2,3];

// let arr2 = [9,10,11];
// arr = [5,6,7];
// let copy = [...arr];
// console.log(copy);

// function demo(){
//     console.log([...arr,...arr2]);
// }
// demo()

// function data(){
//     let copy = [...arr,arr2];
//     console.log(copy);
// }
// data()

//Clone Object & Merge Object

/*
arr = {
  "name" : "Rutuja",
  "surname" : "Gharge"
};

arr1 = {
    "Class" : "BCA",
    "Subject" : "IT"
}

let result = {...arr, ...arr1};
console.log(result);
console.log({...arr, ...arr1});

*/

//function Arrgument Array

// function demo(){

//     let arr = [1,2,3]
//     let arr2 = [4,5,6]
//     console.log(...arr, ...arr2);
// }
// demo()

// function add(a,b,c){
//     return a+b+c;
// }

// let num = [10,20,30];
// let result = add(...num)
// console.log(result);

function demo(...data){
    return data;
}

let text = "hello";
let output = demo(...text);
console.log(output);


function demo(...data) {
    return data;
}

let text = "Hello";

let outputdata = demo(...text);

console.log(outputdata);






