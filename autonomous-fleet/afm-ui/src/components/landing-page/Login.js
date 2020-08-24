import React, { Component, Fragment } from 'react';
import axios from 'axios';



 class Login extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      connect:false
    };
  }
  // ############### Event Handlers ###############

  /** Username field */
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  /** Password field */
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleChange = (event) => {
    switch (event.target.name) {
      case 'username':
        this.setState({ username: event.target.value });
        break;
      case 'password':
        this.setState({ password: event.target.value });
        break;
      default:
        break;
    }
  };


  addAName(){
    this.props.nameTheUser(this.state.username);
  }

  onClickSendLoginData = () => {
    const loginCredentials = {
      username: this.state.username,
      email: "",
      password: this.state.password
    };
      
    axios
      .post('http://localhost:8000/rest-auth/login/', loginCredentials)
      .then((res) => {
        const token = res.data.key;
        localStorage.setItem('token', token); // sets token in browser local memory
        this.setState({connect: true});
        this.addAName();
      })
      .catch((error) => {
        alert('POST user login error ' + error);
      });
      
  };

  render() {
    return (
      <Fragment>
      {/* <Router> */}
      <form >
        <h3>Sign In</h3>

        <div className='form-group'>
          <label>Username</label>
          <input
            value={this.state.username}
            onChange={this.handleUsernameChange}
            type='username'
            name='username'
            className='form-control'
            placeholder='Enter username'
            data-cy='login-username'
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            value={this.state.password}
            onChange={this.handlePasswordChange}
            type='password'
            name='password'
            className='form-control'
            placeholder='Enter password'
            data-cy='login-password'
          />
        </div>

        <div className='form-group'>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
            />
            <label className='custom-control-label' htmlFor='customCheck1'>
              Remember me
            </label>
          </div>
        </div>

          {/* put a <input button> instead <button> for not display the credential in url bar*/}
          <input 
            type='button'
            className='btn btn-primary btn-block'
            onClick={this.onClickSendLoginData}
            data-cy='login-submit'
            value="submit"
          />
        
       
        <p className='forgot-password text-right'>
          Forgot <a href='#'>password?</a>
        </p>
      </form>
      
      {/* </Router> */}
      </Fragment>
    );
  }
}

export default Login;
