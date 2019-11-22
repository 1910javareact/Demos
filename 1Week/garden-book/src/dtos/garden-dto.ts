//dto stand for data transfer object
//basically, a dto is going to be the database version of one of our models

//this dto is going to be after the natural joins to get the roles
export class GardenDTO {
    garden_id: number;
    username: string;
    password: string;
    prettiness: number;
    name: string;
    role_id: number;
    role_name: string;
}