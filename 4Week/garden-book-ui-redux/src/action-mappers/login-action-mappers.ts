import { gardenBookLogin } from "../remote/garden-book-clients/garden-book-user"


// we will make an object with constant values
// so we dont have to worry about spelling
export const gbLoginTypes = {
    INVALID_CREDENTIALS: 'GB_LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'GB_LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'GB_LOGIN_FAILED_LOGIN'
}

// first action mapper
//it is going to try and login
// depending on what we get back, will will return a different action
// this action will get sent to dispatch
// kind of
// this is tricky, because we are doing an async operation
// when we do async, we return a function that returns an action
//then, redux thunk is going to intercept that function, and call it when the async is done

export const gbLogin = (username:string, password:string) => async (dispatch:any) => {

    try{
        let res = await gardenBookLogin(username, password)
        //a successful login
        if(res.status === 200){
            //this is how do it when we have async operations
            dispatch({
                type:gbLoginTypes.SUCCESSFUL_LOGIN,
                payload:{
                    user:res.body
                }
            })
        }else{
            dispatch({
                type:gbLoginTypes.INVALID_CREDENTIALS
            })
        }
    }catch(e){
        dispatch({
            type:gbLoginTypes.UNSUCCESSFUL_LOGIN
        })
    }
    
}

