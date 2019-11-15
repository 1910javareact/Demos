import express from 'express'
import bodyparser from 'body-parser'
import { gardenRouter } from './routers/garden-router'
import { postRouter } from './routers/post-router'

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

//we are registering the router with a base path of /gardens
app.use('/gardens', gardenRouter)

app.use('/posts', postRouter)



//now we need to make the server actually run
//this means the server has to be listening for requests
app.listen(1001, ()=>{
    console.log('app has started');   
})
