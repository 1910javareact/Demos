
let devEnvironment = {
    baseUrl:'http://localhost:2020'
}

let prodEnvironment = {
    baseUrl:'http://54.144.56.133:2020'
}


export let environment = {
    baseUrl:''
}

if(process.env.REACT_APP_ENV === 'dev'){
    environment = devEnvironment
}else if(process.env.REACT_APP_ENV === 'prod'){
    environment = prodEnvironment
}

