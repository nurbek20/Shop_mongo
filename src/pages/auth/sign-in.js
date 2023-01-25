import React, {useState} from 'react';
import MyButtons from '../../components/my-buttons';
import MyInputs from '../../components/my-inputs';
import {Link} from "react-router-dom"
import './auth.css'
import { authServices } from '../../http/auth-services';
import { getMeReduxServices } from '../../redux/services';
import {useDispatch, useSelector} from "react-redux"

const initialState={
    email:"",
    password:""
}

const SignIn=()=>{
    const [form, setForm]=useState(initialState)
    const {loading}=useSelector(state=>state.authReducer)

    const dispatch=useDispatch()
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
           })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const data = await authServices.signInServices({...form})
        console.log("signing>>", data)
        dispatch(getMeReduxServices())
        localStorage.setItem("userData", JSON.stringify(data.data.token))
        setForm(initialState)
    }
    return(
        <div className='auth'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Sign-In</h1>
                <div className='form-controls'>
                    <MyInputs
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    />
                    <MyInputs
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    />
                    <MyButtons>{loading?"Загрузка...":"Войти"}</MyButtons>
                    <Link to="/auth/register">Нет аккаунта</Link>
                </div>
            </form>
        </div>
    )
}   
export default SignIn
