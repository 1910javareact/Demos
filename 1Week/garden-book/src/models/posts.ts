import { Garden } from "./garden"


export class Posts{
    body:string
    author:Garden
    numLikes:number
    //comments:Posts[] this is the challenge version
    constructor(body:string, author:Garden, numLikes:number){
        this.body = body
        this.author = author
        this.numLikes = numLikes
    }
}