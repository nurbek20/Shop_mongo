import React, {useState} from 'react';
import MyButtons from '../../components/my-buttons';
import MyInputs from '../../components/my-inputs';
import {Link} from "react-router-dom"
import './auth.css'
import { authServices } from '../../http/auth-services';

const initialState={
    email:"",
    password:""
}

const SignIn=()=>{
    const [form, setForm]=useState(initialState)

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
                    <MyButtons>Войти</MyButtons>
                    <Link to="/auth/register">Нет аккаунта</Link>
                </div>
            </form>
        </div>
    )
}   
export default SignIn
