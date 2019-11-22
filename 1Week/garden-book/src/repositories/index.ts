//this is the entrypoint for any file in a js/ts project
//its the first file that should be run in a folder
//its also the file that gets run if you only specofy a folder and not a file in it
// /repositories === /repositories/index.ts
import {Pool} from 'pg'
console.log({
    user: process.env['GARDEN_BOOK_USERNAME'],
    host: process.env['GARDEN_BOOK_HOST'],
    database: process.env['GARDEN_BOOK_DATABASE'],
    password: process.env['GARDEN_BOOK_PASSWORD'],
    port: 5432,
    max: 5,
})


export const connectionPool:Pool = new Pool({
    user: process.env['GARDEN_BOOK_USERNAME'],
    host: process.env['GARDEN_BOOK_HOST'],
    database: process.env['GARDEN_BOOK_DATABASE'],
    password: process.env['GARDEN_BOOK_PASSWORD'],
    port: 5432,
    max: 5,
})