import React, {useEffect} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import Register from './auth/register'
import SignIn from './auth/sign-in';
import Home from './home';
import { useSelector } from 'react-redux';
import { getMeReduxServices } from '../redux/services';

const Main=()=>{
    const {user}=useSelector(state=>state.authReducer)
    useEffect(()=>{
        getMeReduxServices()
    },[])
    return(
        <div className='main'>
            <Routes>
                <Route path='/' element={user.fullName?<Home fullName={user.fullName} />:<Register/>} />
                <Route exact path='/auth/sign-in' element={user.fullName?<Navigate to="/" replace />:<SignIn/>} />
                <Route exact path='/auth/register' element={user.fullName?<Navigate to="/" replace />:<Register/>}/>
            </Routes>
        </div>
    )
}

export default Main;