import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import {  FaApple, FaFacebook, FaGoogle, FaLinkedin, FaMoon, FaSun, FaTwitter } from 'react-icons/fa';



const App = () => {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const [show, setShow] = useState(true);

  const swtichTheme = () =>{
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme);
    setShow(!show)
  }

  return (
    <div className='app' data-theme={theme}>
      <div className='login'>
        <h1>Login</h1>
        <div className="container">
          <div className='top'>
            <FaGoogle></FaGoogle>
            <FaTwitter></FaTwitter>
            <FaFacebook></FaFacebook>
            <FaLinkedin></FaLinkedin>
            <FaApple></FaApple>

          </div>
          <p className="divider"><span>Or</span></p>
          <form action="">
            <label htmlFor="">Email:</label>
            <input placeholder='Enter your email' type="email" />
            <label htmlFor="">Password:</label>
            <input placeholder='Enter your password' type="password" />
            <div className='remember'>
              <input type="checkbox" checked="checked" />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className="bottom">
            <p>Forget your password?</p>
            <a href="/">Reset Password</a>
          </div>
          <p className="create">Create Account</p>
        </div>
        <div className="theme-toggle">
            
            {
              !show ? <FaSun onClick={swtichTheme} className='toggle-btn'></FaSun> :<FaMoon onClick={swtichTheme} className='toggle-btn'></FaMoon> 
            }
        </div>
      </div>
    </div>
  );
};

export default App;