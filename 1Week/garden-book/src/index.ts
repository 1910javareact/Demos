import express from 'express'

const app = express()//this line builds the application from express

//req is the request object from the client
//res is the response object we send out
app.use('/', (req, res)=>{ //our first endpoint on uri /
    res.json('Hello Garden')//send as json "Hello Garden"
})




//now we need to make the server actually run
//this means the server has to be listening for requests
app.listen(1001, ()=>{
    console.log('app has started');   
})
