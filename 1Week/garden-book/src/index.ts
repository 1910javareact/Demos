import express from 'express'
import bodyparser from 'body-parser'

import { getAllGardens, saveOneGarden } from './services/garden-service'
import { Garden } from './models/garden'

const app = express()//this line builds the application from express


//req is the request object from the client
//res is the response object we send out
// app.use('/', (req, res)=>{ //our first endpoint on uri /
//     res.json('Hello Garden')//send as json "Hello Garden"
// })

//this is what we call middleware
//every request will go through this bodyparser
//bodyparser will turn the json string on a req into a js object
//then it will fall through to the next endpoint
app.use(bodyparser.json())


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
app.get('/gardens', controllerGetGardens)

app.get('/posts', (req,res)=>{
    res.json({
        author:{
            name:'babylon',
            prettiness:100
        },
        body:'Boy I sure love when no one burns me down',
        numLikes:1
    })
} )

//we should revise this and do data checking
app.post('/gardens', (req,res)=>{
    let {body} = req//destructuring
    let newG = new Garden('',0,0)
    for(let key in newG){
        if(!body[key]){
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



    res.sendStatus(201)
})

//now we need to make the server actually run
//this means the server has to be listening for requests
app.listen(1001, ()=>{
    console.log('app has started');   
})
