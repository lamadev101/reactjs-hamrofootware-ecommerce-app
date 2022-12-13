import React, { useState } from 'react'
import { FaUserInjured } from 'react-icons/fa'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { GiSkeletonKey } from 'react-icons/gi'

const SignUp = ({ setOpen }) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");

  const handlePassword = () => {
    setShow(false);
    setType("text");
  }

  return (
    <div className="wrapper">
      <div className="left">
        <h3>Create an Account</h3>
        <h1 className='logo'>HamroFootware</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptate.</p>
        <strong>Already have an account ?
        <span onClick={() => setOpen(true)}>Login Now</span></strong>
      </div>
      <form action="">
        <div>
          <label>Full Name</label>
          <span>
            <FaUserInjured className="icon" />
            <input type="text" placeholder='John Doe' />
          </span>
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <span>
            <AiOutlinePhone className="icon" />
            <input type="number" placeholder='+977 9XXXXXXXXX' />
          </span>
        </div>
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
          <label htmlFor="">Confirm Password</label>
          <span>
            <GiSkeletonKey className="icon" />
            <input type="password" placeholder='Enter same password again' />
          </span>
        </div>
        <button>Registration</button>
      </form>
    </div>
  )
}

export default SignUp