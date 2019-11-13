//functions is just a way to reuse code

//in js, we can write functions in a few different ways
//I can use the function keyword, a name and then paramaters
function doMath(a, b){
    return a / b
}
console.log(doMath(1,2));

let result = doMath(5, 2)
//in js, functions are like all other variables
//the have a name
//and a value, in the case of functions, this value is the implementation
let newMath = doMath
console.log(doMath(1,3));
console.log(newMath(1,3));

//in js, I can write a funtion literal, most commonly referred to as an arrow function
//it is also sometimes called an anonymous function
//basically, it is the functions implementation, without a name
let myVar = (a,b) => {
    return a / b
}
