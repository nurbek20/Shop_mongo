import React, { useState } from 'react'
import MyButtons from './../../components/my-buttons';
import MyInputs from './../../components/my-inputs';
import { Link } from "react-router-dom"
import './auth.css'
import { authServices } from './../../http/auth-services';

const initialState = {
    fullName: "",
    password: "",
    email: ""
}

const Register = () => {
    const [form, setForm] = useState(initialState)

    const handleChange = (event) => {
        setForm(
            {
                ...form,
                [event.target.name]: event.target.value
            })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const data=await authServices.registerServices({...form});
        console.log("data>>>", data)
        setForm(initialState)
        
    }

    return (
        <div className='auth'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className='form-controls'>
                    <MyInputs
                        type="text"
                        name="fullName"
                        placeholder="UserName"
                        onChange={handleChange}
                    />
                    <MyInputs
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                    />
                    <MyInputs
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                    />
                    <MyButtons>Регистрация</MyButtons>
                    <Link to="/auth/sign-in">есть аккаунт?</Link>
                </div>
            </form>
        </div>
    )
}
export default Register