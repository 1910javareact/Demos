import { Request } from 'express';



export function loggingMiddleware(req: Request, res, next) {
    console.log(`request url:${req.url} and request method:${req.method} and request origin:${req.ip}`);
    //we need to remember to call next
    //or the request can never move on
    next();
}