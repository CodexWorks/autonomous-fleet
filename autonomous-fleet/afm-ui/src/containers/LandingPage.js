import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo from '../imgs/logo.svg';

import Login from '../components/landing-page/Login';
import SignUp from '../components/landing-page/SignUp';

export default class LandingPage extends Component {
  constructor(props){
    super(props);
    this.sendUserName=this.sendUserName.bind(this);
  }

  sendUserName(name){
    this.props.nameTheUser(name);
  }

  render() {
    return (
      <Fragment>
        <Router>
          <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
            <div className='container'>
              <Link className='navbar-brand' to={'/'}>
                <center>
                  <img className='afm-logo' src={logo} alt='afm logo' />
                  <h3>Autonomous Fleet</h3>
                </center>
              </Link>
              <div
                className='collapse navbar-collapse'
                id='navbarTogglerDemo02'
              >
                <ul className='navbar-nav ml-auto'>
                  <li className='nav-item'>
                    <Link className='nav-link' to={'/sign-in/'}>
                      Login
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to={'/sign-up/'}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Switch>
                <Route exact path='/' component={null} />
                <Route path='/sign-in/' render={()=><Login nameTheUser={this.sendUserName}/>} />
                <Route path='/sign-up/' render={()=><SignUp nameTheUser={this.sendUserName}/>} />
              </Switch>
            </div>
          </div>
        </Router>
      </Fragment>
    );
  }
}
