import {getMeAction} from "./actions/auth-action";
import { authServices } from './../http/auth-services';

export const getMeReduxServices=()=>{
    return async()=>{
        try {
            const res=authServices.getMe()
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }
}
