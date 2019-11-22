import express from 'express'
import { Garden } from '../models/garden'
import { getAllGardens, saveOneGarden, getGardenById } from '../services/garden-service'
import { authorization } from '../middleware/auth-middleware'
//this is going to hold all of the gardens endpoints
//I want this in a seperate file because that makes it easier to work on
//easier to find, and easier to collaberate

//routers have a base path, that is made when they a registered with the app
//all endpoints in the router have that base path without us writing it
export const gardenRouter = express.Router()

//an example of not using arrow functions
async function controllerGetGardens(req, res) {
    try {
        let gardens = await getAllGardens()//this function is in services
        res.json(gardens)
    } catch (e) {
        res.status(e.status).send(e.message)
    }
}
//you can only send one response
//so as soon as a more general endpoint ends a response, the specific ones lose the ability to
gardenRouter.get('', [authorization(['Admin']), controllerGetGardens])

//this is going to be an endpoint for finding a particular garden
//generally, I should use a unique id in the uri to pinpoint the garden
//but how to get that id from the uri?
gardenRouter.get('/:id', async (req, res) => {
    let id = +req.params.id//from req.params, give me id
    if (isNaN(id)) {
        res.sendStatus(400)
    } else {
        try {
            let garden = await getGardenById(id)
            res.json(garden)
        } catch (e) {
            res.status(e.status).send(e.message)
        }

    }
})


//we should revise this and do data checking
gardenRouter.post('', [authorization(['Admin', 'Moderator']),
async (req, res) => {
    let { body } = req//destructuring
    let newG = new Garden('', 0, 0, '', '', [])
    for (let key in newG) {
        if (body[key] === undefined) {
            res.status(400).send('Please include all garden fields')
            break;
        } else {
            newG[key] = body[key]
        }
    }
    try{
        let garden = await saveOneGarden(newG)
        res.status(201).json(garden)
    }catch(e){
        res.status(e.status).send(e.message)
    }
}])