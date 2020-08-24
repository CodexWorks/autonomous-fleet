import React, { Component, Fragment } from 'react';
import axios from 'axios';

export default class SignUp extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
    };

  }

  addAName(){
    this.props.nameTheUser(this.state.username);
  }

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
    switch (event.target.name) {
      case 'username':
        this.setState({ username: event.target.value });
        break;
      case 'email':
        this.setState({ email: event.target.value });
        break;
      case 'password1':
        this.setState({ password1: event.target.value });
        break;
      case 'password2':
        this.setState({ password2: event.target.value });
        break;
      default:
        break;
    }
  };

  onClikSendRegisteringData = () => {
    const singUpCredentials={
      username: this.state.username,
      email: this.state.email,
      password1: this.state.password1,
      password2: this.state.password2
  };
    console.log(
        this.state.username + " "+
        this.state.email +" "+
        this.state.password1 +" "+
        this.state.password2  );
    

    // send data to the backend for account creation
    axios
      .post('http://localhost:8000/createUser/', {
        username: this.state.username,
        email: this.state.email,
        password1: this.state.password1,
        password2: this.state.password2
    })
      .then((res) => {
        const token = res.data.key;
        localStorage.setItem('token', token); // sets token in browser local memory
        alert(token)
        this.addAName();
      })
      .catch((error) => {
       alert('POST user registration error ' + error);
      });
  };

  render() {
    return (
      <Fragment>
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
          {/* put a <input button> instead <button> for not display the credential in url bar*/}
        <input type='button'
          className='btn btn-primary btn-block'
          onClick={this.onClikSendRegisteringData}
          value="Sign Up"
        />
         
        <p className='forgot-password text-right'>
          Already registered <a href='#'>sign in?</a>
        </p>
      </form>
      </Fragment>
    );
  }
}
