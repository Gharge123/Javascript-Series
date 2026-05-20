//reads one page at a time
//syntax

function* myGenrator(){
    yield 1;
    yield 2;
    yield 3;
}

//function* - creates generator
//yield - pauses function and return value

function* numbers(){
    yield 10;
    yield 20;
    yield 30;
}

const gen = numbers()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())