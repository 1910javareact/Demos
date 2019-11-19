import { posts, gardens } from "../database";
import { Post } from "../models/post";


export function daoGetAllPosts():Post[]{
    return posts
}

export function daoSaveOnePost(p:Post):boolean{
    console.log(p)

    for(let obj of gardens){
        let match = false
       for(let key in p.author){
           if(p.author[key] !== obj[key]){
               match = false
               break;
           }else{
               match = true
           }
       }
       if(match){
           posts.push(p)
           return true
       }
    }
        throw 500

}

export function daoFindPostById(id:number):Post{
    for(let p of posts){
        if(p.id === id){
            return p
        }
    }
    throw{
        status:404,
        message:'NoSuchPost'
    }
}

export function daoUpdatePost(post:Post){
    let newPosts = [...posts]
    for(let i = 0; i < newPosts.length; i++ ){
        if(newPosts[i].id === post.id){
            newPosts[i] = post
        }
    }
}