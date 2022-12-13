import React, { useState } from 'react'
import { Login, SignUp } from '../components';

const LoginSignUp = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='loginSignup'>
      {open ? <Login setOpen={setOpen}/> : <SignUp setOpen={setOpen}/>}
    </div>
  )
}

export default LoginSignUp