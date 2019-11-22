import express from 'express'
import bodyparser from 'body-parser'
import { gardenRouter } from './routers/garden-router'
import { postRouter } from './routers/post-router'
import { loggingMiddleware } from './middleware/logging-middleware'
import { sessionMiddleware } from './middleware/session-middleware'
import { getGardenByUsernameAndPassword } from './services/garden-service'

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

//lets write some middleware for logging
//because if there is one thing programmers love
//its having GBs of info about what people are doing
app.use(loggingMiddleware)

//this is going to add to every req object
//an object called session
//we can access using req.session
app.use(sessionMiddleware)

//we are registering the router with a base path of /gardens
app.use('/gardens', gardenRouter)

app.use('/posts', postRouter)

app.post('/login', async (req,res)=>{
    let {username, password} = req.body
    if(!username || !password ){
        res.status(400).send('please have a username and password field')
    }
    try{
        let user = await getGardenByUsernameAndPassword(username, password)
        req.session.user = user
        res.json(user)//its standard to send the logged in user info after the log in
    }catch(e){
        res.status(e.status).send(e.message)
    }
    


})

//now we need to make the server actually run
//this means the server has to be listening for requests
app.listen(1001, ()=>{
    console.log('app has started');   
})
