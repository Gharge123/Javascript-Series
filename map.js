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