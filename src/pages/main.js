import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Register from './auth/register'
import SignIn from './auth/sign-in';
import Home from './home';

const Main=()=>{
    return(
        <div className='main'>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/auth/sign-in' element={<SignIn/>} />
                <Route path='/auth/register' element={<Register/>}/>
            </Routes>
        </div>
    )
}

export default Main;