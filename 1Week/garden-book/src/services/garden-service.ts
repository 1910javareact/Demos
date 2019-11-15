import { Garden } from "../models/garden";
import { daoGetAllGardens, daoSaveOneGarden } from "../repositories/garden-dao";
//this layer is for processing requests both before and after getting data from database
//it does things like send messages to other servers
//image processing
//send notifications to other users
//friend requests

export function getAllGardens():Garden[]{
    //do some processing
    return daoGetAllGardens()
}

export function saveOneGarden(g:Garden){
    return daoSaveOneGarden(g)
}