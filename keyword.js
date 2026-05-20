//super keyword

//child class extends parent class 

class Animal{
    constructor(name){
        this.name = name;
    }
}

class Dog extends Animal{
    constructor(name,animalname){
        super(name);
        this.animalname = animalname;
    }
}

const d1 = new Dog("Rutuja","Mavu");
console.log(d1.name);
console.log(d1.animalname);


//static keyword

//property belongs to class itself not to object

class Employee{
    static company = "Google";
    constructor(name){
        this.name = name;
    }
}

const e1 = new Employee("Rutuja");
console.log(e1.name);
console.log(Employee.company);

//Object.freeze

//cannot add, modify, delete property

const user = {
    name:"Rutuja",
    age : 20
}

Object.freeze(user);
user.name = "Aman"; //cannot modify 
console.log(user.name);

const data = {
    name : "sneha",
    age : 20,
    Class : "BCA"
}

Object.freeze(data)
data.name= "Rutuja";
data.age = 30;
console.log(data.name);
console.log(data.age);