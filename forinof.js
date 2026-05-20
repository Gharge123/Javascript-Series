//for of

//used in array ,string
//return value

// const array = [1, 2, 3]
// for (const i of array) {
//     console.log(i);
// }
// const name = "Rutuja";
// for (const value of name) {
//     console.log(value);
// }

//for in

//used in object
//return key

let data = {
    name: "Rutuja",
    age: 24
}

for (const key in data) {
    console.log(key) //returns key
}

let demo = {
    subject1: "marathi",
    subject2: "hindi"
}

for (const key in demo) {
    console.log(demo[key]);
}

//for each

//used in array 
//array method - return value , index

const array = [12, 23, 34]

array.forEach((value, index) => {
    console.log(value, index);
})

const data1 = ["Rutuja", "Meera", "Sanskruti"]

data1.forEach((value, index) => {
    console.log(`All data is ${value}`)

});