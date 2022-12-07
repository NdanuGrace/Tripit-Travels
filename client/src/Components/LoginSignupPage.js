import React from 'react';
import LoginForm from './LoginForm.js';
import SignUpForm from './SignUpForm.js';


function LoginSignupPage({ onLogin}) {

    return (
        <div className='login-signup-page'>
            <div className='forms-div'>
                <div className='login-form-div'>
                    <LoginForm onLogin= {onLogin}  />
                </div>
                
                <div className='signup-form-div'>
                    <SignUpForm onLogin={onLogin} />
                </div>
            </div>
            
        </div>
    )
}

export default LoginSignupPage;