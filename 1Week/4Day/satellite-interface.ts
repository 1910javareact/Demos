//the export keyword was added in es6
//it is used to allow other files, to access this code
//anything we export can be used in any file that imports it


export interface ISatellite{
    orbit:() => string
    orbitalSpeed:number
    orbitType: string
    deltaV:(vector:[number,number,number]) => [number,number,number]
    fuel:string
}
//I can have keys like an object
//types, from typescript
//but no values
//for functions
//()=> return type