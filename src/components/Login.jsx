import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import DogList from '../pages/Doglist';

function LoginPage() {

  // const navigate = useNavigate();

  // function handleClick() {
  //   navigate('/Doglist')
  // }


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
    
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  }

  if (isLoggedIn) {
    return <Navigate to="/Doglist" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          placeholder="admin"
          onChange={event => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={event => setPassword(event.target.value)}
        />
      </label>
      <br />
     
      <button >Login</button>
       
    </form>
  );
}

export default LoginPage;
