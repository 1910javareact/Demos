import { Garden } from "./garden"


export class Post{
    body:string
    author:Garden
    numLikes:number
    id:number
    gardensWhoLiked:Garden[]
    //comments:Posts[] this is the challenge version
    constructor(body:string, author:Garden, numLikes:number, id:number, gLike:Garden[]){
        this.body = body
        this.author = author
        this.numLikes = numLikes
        this.id = id
        this.gardensWhoLiked = gLike
    }
}