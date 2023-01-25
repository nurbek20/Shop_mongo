import {
    getMeAction,
    showLoadingAction,
    showErrorAction,
    hiddenLoadingAction,
    hiddenErrorAction
} from "./actions/auth-action";
import { authServices } from './../http/auth-services';

export const getMeReduxServices=()=>{
    return async(dispatch)=>{
        dispatch(showLoadingAction())
        try {
            const res= await authServices.getMe()
            console.log("res>>>", res)
            dispatch(getMeAction(res.data))
            dispatch(hiddenLoadingAction())
            dispatch(hiddenErrorAction())
        } catch (e) {
            console.log(e)
            dispatch(showLoadingAction())
            dispatch(showErrorAction())
        }
    }
}
