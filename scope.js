//Local Scope Variables (Block Scope)

//Exits only inside its defined function or block

//let and const are local variables

// {
// let a = 10;
// let b = 20;
// }
// console.log(typeof a);
// console.log(typeof b);

//access only block element -block Scope

//Access Local Variables Globaly (only inside the function allowed)

// function demo() {
// let localVar = "I'm Local";
// return localVar;
// }

// let result = demo();
// console.log(result);

// function classdemo() {
// let a = 20;
// let b = 24;
// return a;
// return b;
// }

// let data = classdemo();

// console.log(data);

//Global Scope Variables

//Var - accessible inside the function and outside the fuction
{
    var a = 10;
    var b = 20;
}
function demo() {
    // a = 30;
    // b = 80;
    //console.log(a);
    //console.log(b);
    console.log(window.a);
    console.log(window.b); //window is works for browser only
}
demo();

//output - 10,20