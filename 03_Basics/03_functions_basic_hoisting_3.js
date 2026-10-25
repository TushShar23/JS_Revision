//Hoisting is related to how we can access function or a variable

// function expression is not supported in hoisting but SIMPLE FUNCTION is supported

// SIMPLE FUNCTION
console.log(AddOne(8)) // see befor the declaration of the function we are able to use the function.

function AddOne(num){
    return num+1
}

console.log(AddOne(5))

// FUNCTION EXPRESSION
// console.log(addTwo(1))// this will create errror

const addTwo = function(n){
    return n+2
}

console.log(addTwo(1))