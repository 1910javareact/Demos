//this is where be build the connection pool
import { Pool } from 'pg';
console.log({
    user: process.env['TAAS_USERNAME'],
    host: process.env['TAAS_HOST'],
    database: process.env['TAAS_DATABASE'],
    password: process.env['TAAS_PASSWORD'],
    port: 5432,
    max: 5,
});

//this way is much more maintainable
//so long as all my queries use this value for their schema
//I only ever have to change this value
export const schema = '"TaaS"'

export const connectionPool: Pool = new Pool({
    user: process.env['TAAS_USERNAME'],
    host: process.env['TAAS_HOST'],
    database: process.env['TAAS_DATABASE'],
    password: process.env['TAAS_PASSWORD'],
    port: 5432,
    max: 5,
});