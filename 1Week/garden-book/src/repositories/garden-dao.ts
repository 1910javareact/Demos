import { Garden } from "../models/garden";
import { gardens } from "../database";
import { PoolClient } from "pg";
import { connectionPool } from ".";
import { multiGardenDTOConvertor } from "../util/Gardendto-to-garden";

//the purpose of this file is to contain functions for interacting with the database
//we don't have one yet, but when we do, it should be easy to change
let id = 3//this is a counter for unique garden ids


export async function daoGetAllGardens():Promise<Garden[]>{
    let client:PoolClient
    //this is going to be our connection that we use
    //we are going to get it asynchronously
    //because, all our connections, might be in use
    try{
        //every time we use the await keyword
        client = await connectionPool.connect()
        //we register all code beneath it as a callback function
        //for when the promise resolves
        let result = await client.query('SELECT * FROM garden_book.garden natural join garden_book.garden_roles natural join garden_book.roles')
        return multiGardenDTOConvertor(result.rows)
    }catch(e){
        console.log(e);
        throw {
            status:500,
            message:'Internal Server Error'
        }
    }finally{
        client && client.release()
    }
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