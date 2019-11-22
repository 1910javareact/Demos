//any data that you are going to save in a database
//should have its own model
//any data you are going to send to a user
//should have its own model
export class Garden {
    name: string;
    prettiness: number;
    id: number;
    username: string;
    password: string;
    roles: string[];
    constructor(name: string, prettiness: number, id: number, username: string, password: string, roles: string[]) {
        this.name = name;
        this.prettiness = prettiness;
        this.id = id;
        this.username = username;
        this.password = password;
        this.roles = roles;
    }
}