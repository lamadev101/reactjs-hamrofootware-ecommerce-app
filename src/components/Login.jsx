import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail } from 'react-icons/ai'
import { GiSkeletonKey } from 'react-icons/gi'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/userSlice';
import { BsInfoCircle } from 'react-icons/bs'

const Login = ({ setOpen }) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePassword = () => {
    setShow(false);
    setType("text");
  }

  const userLogin = () => {
    dispatch(loginUser(true));
    navigate("/");
  }

  return (
      <div className="wrapper">
        <div className="left">
          <h3>Welcome to </h3>
          <h1 className='logo'>HamroFootware</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptate.</p>
          <strong>Are you new customer?
          <span onClick={() => setOpen(false)}>Create Account</span></strong>
        </div>
        <form action="">
          <h4>Login</h4>
          <div>
            <label htmlFor="">Email</label>
            <span>
              <AiOutlineMail className="icon" />
              <input type="email" placeholder='doejohn@gmail.com' />
            </span>
          </div>
          <div>
            <label htmlFor="">Password</label>
            <span>
              <GiSkeletonKey className="icon" />
              <input type={!show ? "password" : type} placeholder='Enter strong password' />
              {show ? <AiOutlineEye onClick={handlePassword} /> : <AiOutlineEyeInvisible onClick={() => setShow(true)} />}
            </span>
          </div>
          <div>
            <strong>Forget Password ?</strong>
          </div>
          <button onClick={userLogin}>Login</button>
        </form>
        <div className="notice">
          <p><BsInfoCircle /> Here I used <strong>Private Route</strong>. Please click the Login button</p>
        </div>
      </div>
  )
}

export default Login