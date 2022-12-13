import React from 'react'
import {BiLogOut, BiUserCircle} from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { loginUser } from '../features/userSlice'

const UserAccountCard = ({setOpen}) => {

  const dispatch = useDispatch();
  const handleLogout = ()=>{
    dispatch(loginUser(false));
    setOpen(false);
  }

  return (
    <div className='userAccountCard'>
      <div className="cardBox">
        <div className='link'>
          <BiUserCircle/> Manage My Account
        </div>
        <div className='link' onClick={handleLogout}>
          <BiLogOut/> Logout
        </div>
      </div>
    </div>
  )
}

export default UserAccountCard