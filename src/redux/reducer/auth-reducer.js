import {
    GET_ME,  
    HIDDEN_ERROR,
    HIDDEN_LOADING,
    SHOW_LOADING,
    SHOW_ERROR,
    LOGOUT} from "../types"

const initialState={
    user:{},
    loading:false,
    error:null
}
export const authReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_ME:{
            return{
                ...state,
                user: action.payload
            }
        }
        default :
        return state
    }
}