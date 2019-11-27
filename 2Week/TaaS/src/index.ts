import e, { Response, Request } from 'express';
import { getAllTrains } from './repositories/train-dao';


const rootApp = e()
//Do crud endpoints for trains
//routes
//and locations
//Make routers to seperate out endpoints from index.ts
//make services so we can do any additional processing
//adding authentication//rework models, add sessions, do login, have auth middleware

rootApp.get('/trains', [async (req:Request, res:Response)=>{
    try{
        let trains = await getAllTrains();
        res.json(trains);
    }catch(e){
        res.status(e.status).json(e.message);
    }
}])

rootApp.listen(1002, ()=>{
console.log('app is live');
})
// function listenFunction(){
//     console.log('App is Live');
    
// }