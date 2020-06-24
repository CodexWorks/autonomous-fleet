import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import modules from './modules';
import MainNavbarMenu from './components/MainNavbarMenu';
import SideNavbarMenu from './components/SideNavbarMenu';
import './css/App.css';
import './js/main.js';
import MainContentContainer from './components/MainContentContainer';
import TextBox from './components/TextBox';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentTab: 'dashboard',
      isLoggedIn: false,
      user: null,
      // userRole: client || supplier
    };

    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
  }

  test() {
    alert('test test');
  }

  // handleLogin() {
  //   this.setState({
  //     user: {
  //       name: 'John Doe',
  //       email: 'test@test.tst',
  //       id: 0,
  //     },
  //   });
  // }

  // handleLogout() {
  //   this.setState({ user: null });
  // }

  render() {
    return (
      <Fragment>
        <Router>
          <div className='App'>
            {/* <header className='App-header'></header> */}
            <div className='wrapper'>
              <SideNavbarMenu />
              <div id='content'>
                <MainNavbarMenu
                // user={this.state.userRole}
                // onTestClick={this.test}
                />
                <MainContentContainer />
                <br />
                <h2>Create an article:</h2>
                <TextBox />
              </div>
            </div>
            {/* <ul className='App-nav'>
              {modules.map((
                module // with a name, and routes
              ) => (
                <li
                  key={module.name}
                  className={
                    this.state.currentTab === module.name ? 'active' : ''
                  }
                >
                  <Link
                    to={module.routeProps.path}
                    onClick={() => this.setState({ currentTab: module.name })}
                  >
                    {module.name}
                  </Link>
                </li>
              ))}
            </ul> */}
            <div className='App-content'>
              {modules.map((module) => (
                <Route {...module.routeProps} key={module.name} />
              ))}
            </div>
          </div>
        </Router>
      </Fragment>
    );
  }
}
