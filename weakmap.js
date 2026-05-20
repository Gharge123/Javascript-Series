//key must be object only

// const obj = {};
// WeakMap.set(obj, "hello");

// console.log(WeakMap.get(obj));

const weakMap = new WeakMap();
const user = {
    name: "Rututu"
}

weakMap.set(user, "Patil");
console.log(weakMap.get(user));

const wm = new WeakMap();
const obj = {};
wm.set(obj, "Hello");
console.log(wm.get(obj));
console.log(wm.has(obj));

const ws = new WeakSet();
const obj1 = { name: "Rutuja" };
ws.add(obj1);
console.log(ws.has(obj1));

let score = 85;
let grade = score > 90 ? "A" : score > 80 ? "B" : score > 70 ? "C" : "F";
console.log(grade);




