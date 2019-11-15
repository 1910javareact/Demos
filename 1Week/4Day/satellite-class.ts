import { ISatellite } from "./satellite-interface";
//for using a function as a typescript type
//name: (with any params) => return value type
//of: (a:number) => number
//variable/property: (a:string, b:object) => object
//

//one default export per file
//you import it without the {} and with any name you want
export default class Satellite implements ISatellite{
    fuel:string
    orbitType:string
    orbitalSpeed:number
    deltaV:( p:[number,number,number] ) => [number,number,number]
    constructor(fuel:string, orbitType:string, orbitalSpeed:number, deltaV:(p:[number,number,number])=>[number,number,number]){
        this.fuel= fuel
        this.orbitType = orbitType
        this.orbitalSpeed = orbitalSpeed
        this.deltaV = deltaV
    }
    orbit():string{
        return "Wheeee I am orbiting"
    }
    // getFuel(){
    //     return this.fuel
    // }
    // setFuel(s:string){
    //     this.fuel = s
    // }

}