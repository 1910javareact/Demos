import { Garden } from "../models/garden";
import { gardens } from "../state";

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