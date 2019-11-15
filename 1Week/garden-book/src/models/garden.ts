//any data that you are going to save in a database
//should have its own model
//any data you are going to send to a user
//should have its own model
export class Garden{
    name:string
    prettiness:number
    id:number
    constructor(name:string, prettiness:number, id:number){
        this.name = name
        this.prettiness = prettiness
        this.id = id
    }
}