//symbol is used for creaing unique values
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

console.log(symbol1 === symbol2); //false

//each symbol is unique so false output

//symbol is oject key

const person = {
    id: 1
}

person.id = 3;
console.log(person.id); //3 


const id = Symbol("id");
const user = {
    name: "Rutuja",
    [id]: 2
}

console.log(user[id]);

console.log(Object.keys(user));//name
console.log(user.id); //2

