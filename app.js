
import { name, age } from './importexport.js';
console.log(name("Rutuja"))
console.log(age(20));

// import {add, sub} from "./exportimport.js";

// console.log(add(24,67));
// console.log(sub(40,20));

// import {name, age, city} from "./exportimport.js";

// console.log(name);
// console.log(age);
// console.log(city);

// import {add as sum} from "./exportimport.js";
// console.log(sum(10,20))

// import {sub as subtract} from "./exportimport.js";
// console.log(subtract(40,30));

// import demo from "./exportimport.js";
// console.log(demo("Rutuja Gharge"));

// import { multiply } from "./exportimport.js";
// console.log(multiply(40,30));

import mul from "./exportimport.js";
console.log(mul(30,30));

