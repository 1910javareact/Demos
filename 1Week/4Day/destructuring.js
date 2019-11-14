//destructuring is a convenience, for getting particular fields from an object
//many times in js, we want a few pieces of info from a larger object
//this is a way to get them easily

let animal = {
    type: {
        family:'Panthera',
        species:'Bengal Tiger'
    },
    weight:'Pretty frickin big',
    numOfTeeth: 46,
    flyable:'contested',
    carnivore:true
}
//to destructure
//we put {} while declaring variables
//then we give them exact names matching fields in an object on the left
let {flyable} = animal
let {species} = animal.type

console.log(`flyable is ${flyable} and species is ${species}`);

//this is an example of how to not do immutable data
let {type} = animal
type.footprint = 'Pretty large'
console.log(animal.type);

