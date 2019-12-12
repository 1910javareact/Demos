import { ILoginState } from "."
import { Garden } from "../models/garden"
import { Action } from 'redux'

//the reducer is the only thing allowed to change values in state
//so we pass in state, and the action to update state
//this is an example action
// {
//     type:'SomeString',
//     payload:{
//         with: some data
//     }
// }
const initialState: ILoginState = {
    user: new Garden('', 0, 0, '', '', [])
}



export const loginReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        default:
            return state
    }

}