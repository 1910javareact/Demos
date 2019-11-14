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

let newData = [
    ...data,
    {
        name:'Matt',
        number:8,
        drink:'Caipirinha',
        js:true
    }
]

let newMatt = {
    ...newData[4],
    js:false,
    portuguese:'Fluent'
}
console.log(data);
console.log(newData);
console.log(newMatt);


