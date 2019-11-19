import * as pdao from '../repositories/post-dao'
import { Post } from '../models/post'
import { Garden } from '../models/garden'


export function getAllPosts():Post[]{
    return pdao.daoGetAllPosts()
}

export function saveOnePost(p:Post){
    return pdao.daoSaveOnePost(p)
}

export function likePost(id:number, garden:Garden){
    let post = pdao.daoFindPostById(id)
    for(let i = 0; i < post.gardensWhoLiked.length; i++){
        if(post.gardensWhoLiked[i].id === garden.id){
            post.numLikes--
            post.gardensWhoLiked.splice(i,1)
            pdao.daoUpdatePost(post)
            return post
        }
    }
    post.numLikes++
    post.gardensWhoLiked.push(garden)
    pdao.daoUpdatePost(post)
    return post
    


}