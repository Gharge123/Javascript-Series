//If Function sending parameter undefined or missing then use default parameter value

//Sytax

function function_name(variable = "default value") {

}

//Program 
function greet(name = "Guest") {
    console.log(`Hello ${name}`)
}
greet()
greet("Rutuja");