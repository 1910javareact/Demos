import express from 'express'
import { Garden } from '../models/garden'
import { getAllGardens, saveOneGarden } from '../services/garden-service'
//this is going to hold all of the gardens endpoints
//I want this in a seperate file because that makes it easier to work on
//easier to find, and easier to collaberate

//routers have a base path, that is made when they a registered with the app
//all endpoints in the router have that base path without us writing it
export const gardenRouter = express.Router()

//an example of not using arrow functions
function controllerGetGardens(req, res){
    let gardens = getAllGardens()//this function is in services
    if(gardens){        //its purpose is to process getting all gardens
        res.json(gardens)
    }else{
        res.sendStatus(500)
    }

}
//you can only send one response
//so as soon as a more general endpoint ends a response, the specific ones lose the ability to
gardenRouter.get('', controllerGetGardens)


//we should revise this and do data checking
gardenRouter.post('', (req,res)=>{
    let {body} = req//destructuring
    let newG = new Garden('',0,0)
    for(let key in newG){
        console.log(body[key]);
        
        if(body[key] === undefined){
            res.status(400).send('Please include all garden fields')
            break;
        }else{
            newG[key] = body[key]
        }
    }
    if(saveOneGarden(newG)){
        res.sendStatus(201)
    }else {
        res.sendStatus(500)
    }
})