const cheese = {
    milkType: 'cow',
    type: {
        name: 'cheddar',
        age: 5
    },
    maker: 'Pleasant Ridge Reserve'
}
//stringify turns objects into json strings
//parse, turns json strings into js objects
console.log(JSON.stringify(cheese));

//just like java, we can use the . to access properties
console.log(`The cheese make is ${cheese.maker}`);

//we can also access properties using [] and the name of the property
console.log(`the cheese type is ${JSON.stringify(cheese['type'])}`)//bracket notation

//we can dynamically add properties
cheese.quack = ()=>{
    console.log('I am a duck, Quack Quack');
    
}

cheese.quack()
//we can dynamically add properties
cheese.thorny = true

console.log(`does this cheese have thorns? ${cheese.thorny}`);

//convert cheese into a string
let jsonstring = JSON.stringify(cheese)
//convert the cheese string into an object
let newCheese = JSON.parse(jsonstring)

console.log(cheese);
console.log(newCheese);

//we can delete a property with the delete keyword
delete cheese.thorny

console.log(cheese);


