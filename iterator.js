//it is an object
//access values one by one
//traverse data step by step
//control itreations manually

//return value one by one using next()

// {
//     value: something,
//     done : true / false
// }


const array = [10, 20, 30]

const iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//types of iterator
//built in iterator - array , string , map , set

//string
const str = "Rutu";

const iterator1 = str[Symbol.iterator]();

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

//map

const map = new Map()
map.set("name", "Sonali")
const iterator3 = map[Symbol.iterator]();
console.log(iterator3.next());



