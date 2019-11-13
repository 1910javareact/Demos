//we can use a function as a constructor
//because functions have their own this 
function cheese(maker, type, milkType){
    this.maker = maker
    this.type = type
    this.milkType = milkType
}
//we call that function as a constructor using the new keyword
let cheddar = new cheese(
    'PRR',
    {
        name: 'cheddar',
        age:5
    }, 
    'cow'
)
//we can call it as many times as we want
let manchego = new cheese(
    'spain',
    {
        name: 'Manchego',
        age: 1
    },
   'Sheep'
)
//changing an object made using the function, will not impact other objects made using that function
cheddar.thorny = true

console.log(cheddar);
console.log(manchego);



