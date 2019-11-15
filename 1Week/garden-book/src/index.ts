import express from 'express'
import bodyparser from 'body-parser'

const app = express()//this line builds the application from express

let gardens = [{
    name:'babylon',
    prettiness:100
},
]
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

//you can only send one response
//so as soon as a more general endpoint ends a response, the specific ones lose the ability to
app.get('/gardens', (req,res)=>{
    res.json(gardens)
})

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
    gardens.push(body)
    res.sendStatus(201)
})

//now we need to make the server actually run
//this means the server has to be listening for requests
app.listen(1001, ()=>{
    console.log('app has started');   
})
