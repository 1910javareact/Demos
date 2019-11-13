//an array, like in java, is a collection of values
//arrays are objects, and can hold any number of any type of values
let arr = ['Kenny', ' Matt', 'Justin', {javascript:true,happiness:10}, [1,2,3], 42]

console.log(arr);

//still start counting from 0
console.log(arr[3]);

arr.push('this gets added to the end')
arr.unshift('this gets added to the beginning')
arr.unshift('look at me, Im the beginning now')

console.log(arr);

//classic java for loop
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    
}

//we also have an enhanced for loop in js
//in js it is called the for of loop
for(let val of arr){
    console.log(val);
    
}

//we can also make 2d arrays

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matrix[0]);
console.log(matrix[1][1]);

//convention for slicing and dicing
//beginning index is included
//end index is excluded
//so for 2,5 we get values 2,3,4
console.log(arr.slice(2,5));
//first param, where to start
//second param, how many things to delete, inclusively
//3rd to many params, what to insert in here
console.log(arr.splice(1, 3, 'this', 'here'));
console.log(arr);


