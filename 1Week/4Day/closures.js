let car = {}
//this is our outer function
function encapsulateCarModel(){
    //this is the variable that will be closured
    let model;
    //now we need to wrtie some inner functions
    //that use this model variable
    return[()=>{return model},
        (newVal)=>{
        if(newVal){
            if(typeof(newVal) === 'string'){
                model = newVal
            }
       }
    }
    ]
}
let gs = encapsulateCarModel()
car.getModel = gs[0]
car.setModel = gs[1]
car.setModel('xj7')
console.log(car.model);
console.log(car.getModel());


//this is passing in the object and setting fields directly on it
// function encapsulateCarModel(car){
//     //this is the variable that will be closured
//     let model;
//     //now we need to wrtie some inner functions
//     //that use this model variable
//     car.getModel = ()=>{return model}
//     car.setModel = (newVal)=>{
//         if(newVal){
//             if(typeof(newVal) === 'string'){
//                 model = newVal
//             }
//        }
//     }
// }