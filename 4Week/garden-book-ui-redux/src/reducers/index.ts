import { combineReducers } from "redux";
import { Garden } from "../models/garden";
import { loginReducer } from "./login-reducer";

//this file will contain the type definitions for our store
//there will be many interfaces, that contain what each chunk of store should have
//there will be a special function called combine reducers
//this function will take all of the individual reducers and turn them into one super reducer

//this is specifically, the state from the login component
//other things will be able to use it, but it is under the nme of login
export interface ILoginState {
    user:Garden
}

//will be the typing of our entire global state
export interface IState{
    login:ILoginState
    
}

//this will combine all of our reducers
//and make sure they fufill the state required by IState
export const state = combineReducers<IState>({
    login:loginReducer,
})