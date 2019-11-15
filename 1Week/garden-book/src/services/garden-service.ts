import { Garden } from "../models/garden";
import { daoGetAllGardens, daoSaveOneGarden } from "../repositories/garden-dao";


export function getAllGardens():Garden[]{
    return daoGetAllGardens()
}

export function saveOneGarden(g:Garden){
    return daoSaveOneGarden(g)
}