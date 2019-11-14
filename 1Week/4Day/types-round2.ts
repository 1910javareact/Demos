//If I assign a varaible without specifying type
//it will take the type of its first assignment
let a = 'hello'

console.log(a);
//we can't do this
//a = 9

let b: number | string  = 5
b = 'b'

//functions now have return value types
//the type void is for no return
let c = ()=>{

}
//can I make a variable of type void
let v:void;
//I can only assign null and undefined

let f = ():number => {
    return 0
}

//some types
let v1:string;
let v2:number;
let v3: boolean;
//enums allow us to make our own custom types our of objects or interfaces
enum CardType{Tarot, Magic, PokeMon, YuGiOh}
let v4:CardType;
let v5:void//null and undefined only
let v6:null
let v7:undefined
//just like a js variable
let v8:any;
//we will never make a var of type never
let v9:never

let v10:number[]
let v11:string[]

