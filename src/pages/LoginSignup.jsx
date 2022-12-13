import React, { useState } from 'react'
import { Login, Signup } from '../components';

const LoginSignUp = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='loginSignup'>
      {open ? <Login setOpen={setOpen}/> : <Signup setOpen={setOpen}/>}
    </div>
  )
}

export default LoginSignUp