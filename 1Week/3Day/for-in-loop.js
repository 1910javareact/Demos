//this is a unique for loop for javascript
//it will loop through all of the keys in an object
//not the values themselves
const cheese = {
    milkType: 'cow',
    type: {
        name: 'cheddar',
        age: 5
    },
    maker: 'Pleasant Ridge Reserve'
}
//this is a for in loop
//it is for looping through an objects keys
for (const key in cheese) {
    console.log(key);  
    console.log(cheese[key]);
}
