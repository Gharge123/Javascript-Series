// const greet = (name,time)=> `Good time with you ${name}, at ${time}.`;

// let name = "Rutuja";
// let time = "12:00 AM";

// let message = greet(name,time);

// console.log(message);

// let demo = (a,b) => `Operations Performs on a and b Variable is 1)Addition is ${a+b}, 2)Substraction is ${a-b}, 3)Multiplication is ${a*b} & 4)Division is ${a/b}`;

// let a = 20;
// let b = 30;

// let result = demo(a,b);
// console.log(result);

// const data = () => "Hello Rutuja";

// let result = data();

// console.log(result);

// const demo = name => `Hello, ${name}`;

// let name = "Rutuja Gharge.";

// let result = demo(name);

// console.log(result);

// const data = addition => (`Addition of a and b is, ${addition}`)

// let a = 30;
// let b = 40;

// let result = data(a+b);

// console.log(result);


// const demo = subtraction => (`Substraction of a and b is, ${subtraction}`)

// let a = 30;
// let b = 20;

// let resultdata = demo(a-b);

// console.log(resultdata);

const demo = (name) =>{
 const message = `Hello, ${name}`;
 return message;
}








const demo = (name) => {

    const message = `Hello, ${name}`;
    return message
}
console.log(demo("Rutuja"));

const data = add =>
({
    addition: `Addtion of a and b is ${add}`
})

console.log(data(50).addition);

const greet = (name = "Rutuja") => `hello, ${name}`;
console.log(greet());

const data1 = name => () => `hello, ${name}`;
console.log(data1("Rutuja Patil")());

const greet1 = (...name) => `Hello ${name.join(",")}`;
console.log(greet1("Rutuja Patil"));

const message1 = ((name) => `Hello, ${name}`)("Guest");
console.log(message1);
