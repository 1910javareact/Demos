//arrays have three methods, that are textbook functional programming
//these methods are, filter, map, reduce
//these methods are for processing data of any kind into new data in potentially new formats

let data = [
    {
        name: 'Sam',
        number: 7,
        drink:'Double Tequila Soda Double Lime',
        js: true
    },
    {
        name:'Niyah',
        number:25,
        drink:'Hennessey',
        js:false
    },{
        name:'Kiet',
        number:8,
        drink:'Water',
        js:true
    },{
        name:'Wilfred',
        number:19,
        drink:'Coffee',
        js:true
    }
]

//we need to provide a function
//this function takes 3 params, element, index and the original array
//we return true to keep an element
//false to remove it
//filter will generate a new array, with the kept values
let filterData = data.filter((ele)=>{
    if(ele.js){
        return true
    } else {
        return false
    }
})
//map is a function that needs us to provide a function
//our function will have 3 params, ele, index, original array
//we return the new value to replace the old value in the array
let mappedData = filterData.map((ele)=>{
    return {
        number: ele.number
    }
})

//we also have a reduce function
//reduce will turn all values in the array into one single value
//it needs a callback function with 4 params, 
//the accumulation, the element, the index and the original array
//the accumulation is the running total of what we have reduced so far
//the value we return, becomes the next accumulation
let sumOfFavNumbers = mappedData.reduce((accum, ele)=>{
    return accum + ele.number
}, 0)


let sum = data.filter((ele)=>{
    if(ele.js){
        return true
    } else {
        return false
    }
}).map((ele)=>{
    return {
        number: ele.number
    }
}).reduce((accum, ele)=>{
    return accum + ele.number
}, 0)

console.log(data);
console.log(filterData);
console.log(mappedData);
console.log(sumOfFavNumbers);
console.log(sum);




