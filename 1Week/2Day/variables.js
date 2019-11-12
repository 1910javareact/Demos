//let and const, added in 2015 with es6
/*
    you should always use let and const
    over var
    this is because let and const have block scoping
*/


let a = "chair"//always use let or const
const c = "cap"//const means the variable can't be reassigned
var v = 15//don't use var

pleasedont = "this is bad, don't use vars without declaring them"

let x;

//in javascript we have what is called semicolon injection
//the runtime, in this case node, will put a semicolon for us if we dont write one
//generally you should put semicolons on the end of functional code
console.log('a = ' + a);
console.log('c = ' + c);
console.log('v = ' + v);
console.log(pleasedont);
console.log(x);




a = 10
console.log('a = ' + a);


//what if we add a string to a number

console.log(v + pleasedont);

//what if we add a number to a string

console.log(pleasedont + v);

