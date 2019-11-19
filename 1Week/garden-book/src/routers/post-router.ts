import express from 'express'
import * as pservice from '../services/post-service'
import { Post } from '../models/post'
import { Garden } from '../models/garden'
import { authorization } from '../middleware/auth-middleware'

export const postRouter = express.Router()

postRouter.get('', (req,res)=>{
    let posts = pservice.getAllPosts()
    if(posts){
        res.json(posts)
    }else{
        res.sendStatus(500)
    }
})

//we should revise this, so we use the logged in users info for making a post
postRouter.post('', (req,res)=>{
    let {body} = req
    let {author} = body
    let newP = new Post('', new Garden('',0,0,'','',[]),0, 0, [])
    for(let key in newP){
        console.log(body[key]);
        
        if(body[key] === undefined){
            res.status(400).send('Please include all Post fields')
            break;
        }else{
            newP[key] = body[key]
        }
    }
    if(!author){
        res.status(400).send('Please include all Post fields')
    }
    for(let key in newP['author']){
        
        if(author[key] === undefined){
            res.status(400).send('Please include all Post fields')
            break;
        }else{
            newP['author'][key] = author[key]
        }
    }
    try{
        let result = pservice.saveOnePost(newP)
        if(result){
            res.sendStatus(201)
        }
    }catch(e){
        if(e === 500){
            res.sendStatus(500)
        }else{
            res.sendStatus(400)
        }
    }
})

//this is for liking a post
postRouter.patch('/:id', [authorization(['User']), (req,res)=>{
    let id = +req.params.id
    let garden = req.session.user
    try{
        let post = pservice.likePost(id, garden)
        res.json(post)
    }catch(e){
        res.status(e.status).send(e.message)
    }
    
}])