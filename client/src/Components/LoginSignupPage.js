import React, { useState } from 'react';
import LoginForm from './LoginForm.js';
import SignUpForm from './SignUpForm.js';



function LoginSignupPage({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (

        <div className='login-signup-page'>
            <h4>TRIPIT TRAVELS</h4>
            <div className='forms-div'>

                {showLogin ? (
                    <div className='login-form-div'>


                        <LoginForm onLogin={onLogin} />
                        <div />
                        <p className='account'>
                            Don't have an account? &nbsp;
                            <button className='book-btn' color="secondary" onClick={() => setShowLogin(false)}>
                                Sign Up
                            </button>
                        </p>
                    </div>
                ) : (
                    <div className='signup-form-div'>

                        <SignUpForm onLogin={onLogin} />

                        <p className='sign'>
                            Already have an account? &nbsp;
                            <button  className='book-btn' color="secondary" onClick={() => setShowLogin(true)}>
                                Log In
                            </button>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginSignupPage;