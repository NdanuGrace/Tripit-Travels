import React from 'react';
// import LoginForm from './LoginForm.js';
// import SignUpForm from './SignUpForm.js';


function LoginSignupPage({ setUser, setIsAuthenticated }) {

    return (
        <div className='login-signup-page'>
            <div className='forms-div'>
                <div className='login-form-div'>
                    <LoginForm setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
                </div>
                
                <div className='signup-form-div'>
                    <SignUpForm setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
                </div>
            </div>
            
        </div>
    )
}

export default LoginSignupPage;