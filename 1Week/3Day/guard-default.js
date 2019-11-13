//guard and default are special operators that can be used outside of expressions
//we can use them for conidtional logic, in nearly every part of our code

let userInput = 'a';

//default will take the right value, only if the left is falsey
let userName = userInput || 'John Doe'


console.log(userName);

let userObject = {
    userName: userName
}

userObject = undefined;
//this is the guard operator
//we will only try the left value, if the right value is truthy
//this can be used to "guard" us from NullPointers
let userObjectName = userObject && userObject.userName

console.log(userObjectName);

