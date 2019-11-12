//var has two scopes, global/module, and function
//let and const also have a block scope

var a = "global"
let b = "global"

function test() {
    //hoisting, whenever I declare a var, on any scope in this function
    //that declaration will be moved to right here, by node
    //it looks like this
    //var x
    console.log(`a = ${a}, and b = ${b}`);
    a = 10
    b = 20
    console.log(`a = ${a}, and b = ${b}`);

    console.log(`c = ${c}`);
    
    if(true){
        var c = "hoisted"
        let d = "block scoped"
    }
    console.log(`c = ${c}`);
    //because d was made using let, it is scoped to its block
    //this means that when we leave the block, it no longer exists
    //console.log(`d = ${d}`);
    
    
    

}

test()

console.log(`a = ${a}, and b = ${b}`);