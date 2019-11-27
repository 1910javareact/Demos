export class HttpError extends Error{
    status:number
    constructor(message, status){
        super(message)
        this.status = status
    }
}