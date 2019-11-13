//prototypal inheritance
//it is a form of inheritance, in fact if you remember your history lesson
//the smalltalk programming language used prototypal inheritance

//we build what we call a prototype chain, 
//the chain starts with the Super Object

//this object has a prtototype of Object
let parent = {
    name:'parent',
    age:'old',
}

console.log(Object.getPrototypeOf(parent));

//this childs current prototype is Object
let child = {
    name:'child',
    canFly:true
}

child.__prototype__ = parent//don't do this one in node
Object.setPrototypeOf(child, parent)//do this one

//now that parent is my proto
//I can get an age property from parent
console.log(child.age);

Object.getPrototypeOf(parent).quack = ()=>{
    console.log('I am a duck');
}

child.quack()
parent.quack()

let obj3 = {}
obj3.quack()