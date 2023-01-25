import instance from "./settings";

const registerServices=(data)=>{
    return instance.post('register', data)
}

const signInServices=(data)=>{
    return instance.post('login', data)
}
const getMe=()=>{
    return instance.get('me')
}

export const authServices={
    registerServices,
    signInServices,
    getMe
}