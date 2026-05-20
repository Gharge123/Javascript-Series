//Arithmetic operator

/*
let a =6;
let b =3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(Math.pow(4,3)); //old way to find exponentionals.
console.log(a**b);  //exponentionals - 6*6*6

console.log(3**2**4);

//3**(2**4)
//3**(2*2*2*2)
//3**16
//3*3*3*3*3*3*3*3*3*3*3*3*3*3*3*3*3
//43046721
*/


//Assignment Operator
/*
let x=5;

x+=3; //5+3=8
x-=3; //8-3=5
x*=3; //5*3=15
x/=3; //15/3=5
x%=4; //5%4=1
x**=4; //1**4=1
console.log(x) //output 1

*/

//Comparision Operator
/*console.log(10=="10") //true //data type not check
console.log(10==="10") //false - check data type - strict equality
console.log(10!="10") //data type check
console.log(10!=="10") //data type not check

console.log(10>5) //true
console.log(10<5) //false
console.log(10>=10) //true

*/

//Logical Operator
/*
let a=true;
let b=false;
console.log(a&&b) //AND - both True then true otherwise false - //false
console.log(a||b) //OR - both false then false otherwise true - //true
console.log(!a) //NOT - opposite to value //false

*/

//Ternary Operator

/*let a=5;
let result = a%2==0 ? "Even" : "Odd";
console.log(result);

let age=10;
let ouput = age>=18 ? "Applicable for Vote" : "Not Applicable for Vote";
console.log(ouput);
*/

//typeof and instanceof operator

//typeof - define or check type
//instanceof - define or check Object

console.log(typeof 12.34);

array = [1,2,3,4]
console.log(array instanceof Array); //array it is an object in javascript

//simple constructor using instance of

class Person{
  constructor(name){
    this.name = name;
  }
}

let P1 = new Person("Rutuja"); //P1 become instance of person
console.log(P1 instanceof Person);

//fuctions class constructor

function Car(name){
    this.name = name;
}

let C1 = new Car("BMW");
console.log(C1 instanceof Car);