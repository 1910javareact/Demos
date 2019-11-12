//js is loosly typed
//js is also dynamically typed
//don;t let anyone tell you js doesn't have types
//we can change types and we don;t have to specify types

function typecheck(a){
    console.log(`a has a value of ${a} and a type of ${typeof(a)}`);
}


typecheck(10)
typecheck(null)
typecheck(NaN)//when we try to do math with things that aren;t numbers, we get NaN
typecheck(false)
typecheck(true)
typecheck(typecheck)
typecheck(10.5)
typecheck(undefined)
typecheck(-10)
typecheck({})//this is an object literal
typecheck([,1,2,3,])
typecheck(8 + 'string')
typecheck(Infinity)
//typecheck(a) a was not defined