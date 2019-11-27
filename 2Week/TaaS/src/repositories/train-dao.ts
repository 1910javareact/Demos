import { PoolClient } from "pg";
import { connectionPool, schema } from ".";
import { HttpError } from "../errors/HttpError";
import { trainDTOToTrain } from "../models/converters/TrainDTO-to-Train";



export async function getAllTrains(){
    let client:PoolClient
    try{
        client = await connectionPool.connect()
        const result = await client.query(`select * from ${schema}.trains as t left join ${schema}.gps_location as gl on t.gps_location = gl.gps_location_id;`)
        console.log(result.rows);
        

        return result.rows.map(trainDTOToTrain)//is a very js and functional way to convert data fropm one type to another
    }catch(e){
        console.log(e);   
        throw new HttpError('Database Error',500);  
    } finally{
        client && client.release()
    }
}