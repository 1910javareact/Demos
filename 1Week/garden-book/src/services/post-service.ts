import * as pdao from '../repositories/post-dao'
import { Post } from '../models/post'


export function getAllPosts():Post[]{
    return pdao.daoGetAllPosts()
}

export function saveOnePost(p:Post){
    return pdao.daoSaveOnePost(p)
}