import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
const[password, setPassword] = useState("")


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
      <label htmlFor="text">Username:</label>

        <input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>

        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='login-button' type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;