
//map is an array method
//change data
//create the new array

// array.map((value, index, array) => {
//     return something;
// })


const numbers = [1, 2, 3]

const result = numbers.map((num) => {
    return num * 2;
})

console.log(result);

const num = [2, 4, 6]

const data = num.map(num => num * 2)
console.log(data);


const numbers1 = ["rutuja", "patil"]

const toUpperCase = numbers1.map(name => {
    return name.toUpperCase()
})

console.log(toUpperCase);

//Add text 

const data1 = ["Rutuja Patil"]

const output = data1.map(text => {
    return `Hello I Very Smart Man Guy ${text}`;
})

console.log(output);

const product = [
    { id: 1, name: "banana" },
    { id: 2, name: "apple" }
]

const result1 = product.map(product => {
    return product.id;
})

console.log(result1);

const student = new Map();

student.set("name", "Rutuja");
student.set("age", 20);

console.log(student);

//has - if value is there then returns true 

const studentdata = new Map();

student.set("name", "Rutuja");
console.log(student.has("name"));

const dataoutput = new Map();

dataoutput.set("name", "Rutuja");
dataoutput.set("age", 20)

dataoutput.delete("age");
console.log(dataoutput);

const numbers2 = new Set([1, 2, 3, 4, 5])
console.log(numbers2);
numbers2.delete();
numbers2.clear();
numbers2.add(6);
numbers2.size;
console.log(numbers2);


//map - array method
//take every item of an change it and give new array

//for ex  you have [1, 2, 3] you want [2,4,6] so main array is *2 then shows the output

// array.map(function(currentvalue){
//     return new array;
// })

const numbers = [1,2,3];
const result = numbers.map((num)=>{
    return num*2;
});
console.log(result);

const num = [2,4,6];
const result1 = num.map((num)=>{
    return num % 2==0;
})
console.log(result1);

const data = [1, 2, 3]
const dataoutput = data.map(num => num*2)
console.log(data);
console.log(dataoutput);

//structure of map

// array.map((index,value,array) =>{

// })

const num1 = [1,2,3]
const ans = num.map((value)=>{
    return value + 10;
})
console.log(ans);

const num2 = [2,4,6]
const ansdata = num2.map((index)=>{
    return index;
})
console.log(ansdata);

