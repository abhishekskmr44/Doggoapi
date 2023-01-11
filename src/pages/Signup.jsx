import React, { Component } from 'react';

class LoginSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
      password: ''
    };
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin = () => {
    const { username, password } = this.state;
    // Validation
    if (username.length < 5 || password.length < 5) {
      alert('Username and Password should be 5 characters long!');
      return;
    }
    // Login logic
    this.setState({
      isLoggedIn: true
    });
  }

  handleSignup = () => {
    const { username, password } = this.state;
    // Validation
    if (username.length < 5 || password.length < 5) {
      alert('Username and Password should be 5 characters long!');
      return;
    }
    // Signup logic
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    const { isLoggedIn, username, password } = this.state;
    return (
      <div>
        {isLoggedIn ? (
          <h3>You are logged in!</h3>
        ) : (
          <div>
            <h3>Log in</h3>
            <input type="text" placeholder="Username" value={username} onChange={this.handleUsernameChange} />
            <input type="password" placeholder="Password" value={password} onChange={this.handlePasswordChange} />
            <button onClick={this.handleLogin}>Login</button>
            <h3>Sign up</h3>
            <input type="text" placeholder="Username" value={username} onChange={this.handleUsernameChange} />
            <input type="password" placeholder="Password" value={password} onChange={this.handlePasswordChange} />
            <button onClick={this.handleSignup}>Signup</button>
          </div>
        )}
      </div>
    );
  }
}

export default LoginSignup;