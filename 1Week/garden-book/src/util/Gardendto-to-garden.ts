import { GardenDTO } from '../dtos/garden-dto';
import { Garden } from '../models/garden';


//this function will take in an array of gardenDTOs
//First we will loop through the array and grab all role names
//then we build a new garden object and pass in all values
//including the role array we built
export function gardenDTOtoGarden(gD: GardenDTO[]): Garden {
    const roles = [];
    for (const g of gD) {
        roles.push(g.role_name);
    }
    return new Garden(
        gD[0].name,
        gD[0].prettiness,
        gD[0].garden_id,
        gD[0].username,
        gD[0].password,
        roles);
}

//this function takes in many garden dtos, some with the same id
//it adds all garden dtos with the same id to a temp array
//then converts that array into a single garden object from 1-3 gardenDTO objects
//this function can be used with any set of gardenDTOS to turn them into Gardens
export function multiGardenDTOConvertor(gD: GardenDTO[]): Garden[] {
    let currentGarden: GardenDTO[] = [];
    const result: Garden[] = [];
    for (const g of gD) {
        if (currentGarden.length === 0) {
            currentGarden.push(g);
        } else if (currentGarden[0].garden_id === g.garden_id) {
            currentGarden.push(g);
        } else {
            result.push(gardenDTOtoGarden(currentGarden));
            currentGarden = [];
            currentGarden.push(g);
        }
    }
    result.push(gardenDTOtoGarden(currentGarden));
    return result;
}
