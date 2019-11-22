import { Garden } from "../models/garden";
import { daoGetAllGardens, daoSaveOneGarden, daoGetGardenById, daoGetGardenByUsernameAndPassword } from "../repositories/garden-dao";
//this layer is for processing requests both before and after getting data from database
//it does things like send messages to other servers
//image processing
//send notifications to other users
//friend requests

export async function getAllGardens():Promise<Garden[]>{
    //do some processing
    try{
        return await daoGetAllGardens()
    } catch(e){
        throw e//we have to re-throw e or the error will get lost in async callbacks
    }
    
}

export function saveOneGarden(g:Garden):Promise<Garden>{
    return daoSaveOneGarden(g)
}

export function getGardenById(id:number):Garden{
    console.log("Service: you are seraching for garden " + id);
    
    return daoGetGardenById(id)
}

export function getGardenByUsernameAndPassword(username:string, password:string):Promise<Garden>{
    //if this was for real
    //we should be hashing and salting the password here
    //but our api is wildly unsecure, so don't worry about
    return daoGetGardenByUsernameAndPassword(username, password)
}