
import React, { useState } from 'react'
import "./loginScreen.css"
import SignInScreen from './SignInScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
     <div className="loginScreen_background">
     <img className='loginScreenLogo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
     <button className='login_button' onClick={()=>setSignIn(true)}>Sign In</button>
     <div className="loginScreenGradient"/>
     </div>

     <div className="login_screen_body">
        {signIn?
        (<SignInScreen/>)
        :
        (<>
            <h1 className="title">Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to Watch?Enter your email to create or restart your membership.</h3>
            <div className="loginScreen_input">
                <form >
                  <input type="email" placeholder='Email Address' />
                  <button className='loginInput_button' onClick={()=>setSignIn(true)}>Get Started</button>
                </form>
            </div>
          </>
        )
        }
       
     </div>
    </div>
  )
}

export default LoginScreen