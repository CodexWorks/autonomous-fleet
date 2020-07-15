import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password1: '',
    password2: '',
  };

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePassword1Change = (event) => {
    this.setState({
      password1: event.target.value,
    });
  };

  handlePassword2Change = (event) => {
    this.setState({
      password2: event.target.value,
    });
  };

  handleChange = (event) => {
    switch(event.target.name){
      case 'username':this.setState({username: event.target.value,}); break;
      case 'email': this.setState({email: event.target.value,});
      case 'password1': this.setState({password1: event.target.value,});
      case 'password2': this.setState({password2: event.target.value,}); break;
    }
  }

  onClikSendRegisteringData = () => {
    axios
      .post('http://127.0.0.1:8000/rest-auth/registration/', {
        username: this.state.username,
        email: this.state.email,
        password1: this.state.password1,
        password2: this.state.password2
      })
      .then((res) => {
        const token = res.data.key;
        localStorage.setItem('token', token); // sets token in browser local memory
      })
      .catch((error) => {
        console.log('POST user registration error ' + error);
      });
  }

  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className='form-group'>
          <label>Username</label>
          <input
            type='text'
            name='username'
            onChange={this.handleUsernameChange}
            className='form-control'
            placeholder='Username'
          />
        </div>

        <div className='form-group'>
          <label>Email address</label>
          <input
            type='email'
            name='email'
            onChange={this.handleEmailChange}
            className='form-control'
            placeholder='Enter email'
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            name='password1'
            onChange={this.handlePassword1Change}
            className='form-control'
            placeholder='Enter password'
          />
        </div>

        <div className='form-group'>
          <label>Confirm Password</label>
          <input
            type='password'
            name='password2'
            onChange={this.handlePassword2Change}
            className='form-control'
            placeholder='Confirm password'
          />
        </div>

        <button 
          type='submit' 
          className='btn btn-primary btn-block'
          onClick={this.onClikSendRegisteringData}
        >
          Sign Up
        </button>
        <p className='forgot-password text-right'>
          Already registered <a href='#'>sign in?</a>
        </p>
      </form>
    );
  }
}
