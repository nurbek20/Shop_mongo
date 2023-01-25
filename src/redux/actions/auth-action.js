import {
    GET_ME,
    HIDDEN_ERROR,
    HIDDEN_LOADING,
    SHOW_LOADING,
    SHOW_ERROR,
    LOGOUT
} from "../types"

export const getMeAction=(user)=>{
    return {
        type:GET_ME,
        payload:user
    }
}