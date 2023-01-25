import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../redux/actions/auth-action'

const Home = ({fullName}) => {
  const dispatch=useDispatch()
  const logout=()=>{
    dispatch(logoutAction())
    localStorage.removeItem("userData")
  }
  return (
    <div>
      <h1>Hello {fullName}</h1>
      <button onClick={logout}>Выйти</button>
    </div>
  )
}

export default Home