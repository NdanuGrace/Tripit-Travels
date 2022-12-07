import React, {useState} from 'react';
import LoginForm from './LoginForm.js';
import SignUpForm from './SignUpForm.js';



function LoginSignupPage({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className='login-signup-page'>
            <div className='forms-div'>
                <h3>Dont have an account?</h3>
                <div className='signup-form-div'>
                    <SignUpForm onLogin={onLogin} />
                </div>

                Already have an account? &nbsp;
            {/* <Button  color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button> */}
                <div className='login-form-div'>
                    <LoginForm onLogin={onLogin} />
                </div>

            </div>

        </div>
    )
}

export default LoginSignupPage;