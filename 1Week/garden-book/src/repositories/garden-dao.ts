import { Garden } from '../models/garden';
import { PoolClient } from 'pg';
import { connectionPool } from '.';
import { multiGardenDTOConvertor, gardenDTOtoGarden } from '../util/Gardendto-to-garden';

//the purpose of this file is to contain functions for interacting with the database
//we don't have one yet, but when we do, it should be easy to change



export async function daoGetAllGardens(): Promise<Garden[]> {
    let client: PoolClient;
    //this is going to be our connection that we use
    //we are going to get it asynchronously
    //because, all our connections, might be in use
    try {
        //every time we use the await keyword
        client = await connectionPool.connect();
        //we register all code beneath it as a callback function
        //for when the promise resolves
        const result = await client.query('SELECT * FROM garden_book.garden natural join garden_book.garden_roles natural join garden_book.roles');
        return multiGardenDTOConvertor(result.rows);
    } catch (e) {
        console.log(e);
        throw {
            status: 500,
            message: 'Internal Server Error'
        };
    } finally {
        client && client.release();
    }
}




export async function daoSaveOneGarden(g: Garden): Promise<Garden> {
   //because we need to insert into the garden table
   //and we need to insert into the garden_roles table
   //we should return the garden object of the garden we just made
    let client: PoolClient;
    client = await connectionPool.connect();
    try {

        await client.query('BEGIN'); //start a transaction
        //the returning keyword can be used with insert, to return the values that actually got inserted
        const result = await client.query('INSERT INTO garden_book.garden (username, "password", "name", prettiness) values ($1,$2,$3,$4) RETURNING garden_id',
        [g.username, g.password, g.name, g.prettiness]);
        for (const role of g.roles) {
            let roleId = 0;
            switch (role) {
                case 'Admin':
                    roleId = 1;
                    break;
                case 'Moderator':
                    roleId = 2;
                    break;
                default:
                    roleId = 3;
                    break;
            }
            await client.query('INSERT INTO garden_book.garden_roles VALUES($1,$2)',
            [result.rows[0].garden_id, roleId ]);
        }
        g.id = result.rows[0].garden_id;
        await client.query('COMMIT');
        return g;
    } catch (e) {
        await client.query('ROLLBACK');
        throw {
            status: 500,
            message: 'Internal Server Error'
        };
    } finally {
        client && client.release();
    }
}

export async function daoGetGardenById(id: number): Promise<Garden> {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        const result = await client.query('SELECT * FROM garden_book.garden natural join garden_book.garden_roles natural join garden_book.roles where garden_id = $1', [id]);
        if (result.rowCount > 0) {
            return gardenDTOtoGarden(result.rows);
        } else {
            throw 'No Such Garden';
        }

    } catch (e) {
        if (e === 'No Such Garden') {
            throw {
                status: 404,
                message: 'this garden does not exist'
            }; //this is an error
        } else {
            throw  {
                status: 500,
                message: 'Internal Server Error'
            };
        }
    }

}

export async function daoGetGardenByUsernameAndPassword(username: string, password: string): Promise<Garden> {
    let client: PoolClient;

    try {
        client = await connectionPool.connect();
        //we use $number to represent a paramter to our sql query
        //then we provide those paramaters as values in an array
        //that array is the second param of the query function
        //this way, pg can sanitize the user inputs, so we can avoid sql injection
        //we call this kind of query a paramaterized query // sometimes a prepared statement
        const result = await client.query('SELECT * FROM garden_book.garden natural join garden_book.garden_roles natural join garden_book.roles WHERE username = $1 and password = $2',
            [username, password]);
        if (result.rowCount === 0) {
            throw 'bad credentials';
        } else {
            return gardenDTOtoGarden(result.rows);
        }
    } catch (e) {
        console.log(e);
        if (e === 'bad credentials') {
            throw {
                status: 401,
                message: 'Bad credentials'
            };
        } else {
            throw {
                status: 500,
                message: 'Internal Server Error'
            };
        }
    } finally {
        client && client.release();
    }




}