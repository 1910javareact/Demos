export async function gardenBookLogin(username:string, password:string){
    //another example of the enhanced object literal
    //this object has a field called username with a value of the passed in username
    //and the same for password
    const credentials = {
        username,
        password
    }
    try{
        const response = await fetch('http://localhost:1001/login',{
            //this object is the config for our request
            //we use it, to set headers and method and such
            method:'POST',
            credentials:'include',
            body: JSON.stringify(credentials),
            headers:{
                'content-type':'application/json'
            }
        })
        console.log(response);
        if(response.status === 200){
            return {
                status: response.status,
                body: await response.json()}
        }else {
            return{
                status:response.status,
                body:undefined
            }
        }
    }catch(e){
        console.log(e);
        throw new Error('Something went wrong')
    }


}