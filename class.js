//a class is a blueprint of object
//class - car design development - engine, model, color etc
//actual car


// class car{
//     start(){
//         console.log("car started")
//     }
//     stop(){
//       console.log("car stopped")
//     }
// }

//creating object

class Car{
    start(){
        console.log("object created");
    }
}

const car1 = new Car();


class Student{

}

const s1 = new Student();
const s2 = new Student();

s1.name = "Rutuja";
s2.name = "Gharge";

console.log(s1.name);
console.log(s2.name);


//constructor

class Student1{
    constructor(){
        console.log("construtor called");
        
    }
}
const s3 = new Student1();


class CarModel{
    constructor(brand){
        this.brand = brand;
    }
    show(){
        console.log(this.brand);
    }
}

const model1 = new CarModel("BMW");
model1.show();

class Employee{
    constructor(name,salary) {
        this.name = name;
        this.salary = salary;
    }
    show(){
        console.log(this.name);
        console.log(this.salary);
    }
}

const employeedetails = new Employee("rutuja","20000");
employeedetails.show();