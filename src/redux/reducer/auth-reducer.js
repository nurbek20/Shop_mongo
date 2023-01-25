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
        case LOGOUT:{
            return{
                ...state,
                user:{}
            }
        }
        case SHOW_LOADING:{
            return {
                loading:true
            }
        }
        case HIDDEN_LOADING:{
            return{
                ...state,
                loading:false
            }
        }
        case HIDDEN_ERROR:{
            return{
                ...state,
                error:null
            }
        }
        case SHOW_ERROR:{
            return{
                ...state,
                error:"Ой что то не так!"
            }
        }
        default :
            return state
    }
}