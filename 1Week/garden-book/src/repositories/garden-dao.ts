import { Garden } from "../models/garden";
import { gardens } from "../database";

//the purpose of this file is to contain functions for interacting with the database
//we don't have one yet, but when we do, it should be easy to change
let id = 3//this is a counter for unique garden ids


export function daoGetAllGardens():Garden[]{
    return gardens
}

export function daoSaveOneGarden(g:Garden){
    g.id = id
    id++
    gardens.push(g)
    return true
}

export function daoGetGardenById(id:number):Garden{
    for(let g of gardens){
        if(g.id === id){
            return g
        }
    }
    throw {
        status:404,
        message:'this garden does not exist'
    }//this is an error
}

export function daoGetGardenByUsernameAndPassword(username:string, password:string){
    for(let g of gardens){
        if(g.username === username && g.password === password){
            return g
        }
    }
    throw {
        status: 401,
        message: 'Bad credentials'
    }
}