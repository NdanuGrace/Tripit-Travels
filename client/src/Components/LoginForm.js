import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// function LoginForm({setUser, setIsAuthenticated}) {
//   const history = useHistory()
//   const [error, setError] = useState([])
//   console.log('error: ', error);
//   const [loginData, setLoginData] = useState({
//     username: '',
//     password: '',
//   })

//   const handleChange = (e) => {
//     const {name, value} = e.target
//     setLoginData(loginData => ({...loginData, [name]: value}) )
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     setError([])
//     fetch('/login',{
//       method:'POST',
//       headers:{
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body:JSON.stringify(loginData),
//     })
//     .then(r => {
//       if(r.ok){
//         r.json()
//         .then(user => {
//           setUser(user)
//           setIsAuthenticated(true)
//         }).then(() => history.push('/availablehouses'))
//       } else{
//         r.json()
//         .then(json => setError(json.error))
//       }
//     })
//   }

//     return(
//         <div className='login-form-box'>
//             <h1 className='login-title'>Returning Users Log In Here!</h1>
//             <form onSubmit={handleSubmit}>
//                 <label className="Login-page-labels">Username:
//                 <input className="loginInputs" type='text' name='username' onChange={handleChange} value={loginData.username}></input>
//                 </label>
//                 <label className="Login-page-labels">Password:
//                 <input className="loginInputs"  type='password' name='password' onChange={handleChange} value={loginData.password}></input>
//                 </label>
//                 <input type="submit" className='login-button' value='Login'/>
//             </form>
//             {error ? <p className='error'>{error}</p> : null }
//         </div>
//     )
// }
function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
  }

  return (
    <div className='login-form-box'>
      <h1 className='login-title'> Log In Here!</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className='login-button' type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;