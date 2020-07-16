import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import modules from './modules';
import MainNavbarMenu from './components/MainNavbarMenu';
import SideNavbarMenu from './components/SideNavbarMenu';
import './css/App.css';
import './js/main.js';
// import MainContentContainer from './components/MainContentContainer';
import CurrentOrdersContainer from './components/main-content/dashboard/client/CurrentOrdersContainer';
import appConfig from './appConfig';

import LandingPage from './components/LandingPage';
// import TextBox from './components/TextBox';

// ############### Constructor ###############
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideNavbarMenuItems: appConfig.routes,
      currentTab: 'dashboard',
      isLoggedIn: false,
      user: null, // client || supplier
    };
  }

  // ############# RENDER ###########
  render() {
    return (
      <Router>
        {console.log(localStorage.getItem('token'))}
        <div className='App'>
          {localStorage.getItem('token') !== null ? (
            <LandingPage />
          ) : (
            <div>
              <div className='wrapper'>
                <SideNavbarMenu items={this.state.sideNavbarMenuItems} />
                <div>{this.props.isAuthenticated}</div>
                <div id='content'>
                  <MainNavbarMenu />

                  {/* <MainContentContainer /> */}

                  <CurrentOrdersContainer />
                </div>
              </div>
              <div className='App-content'>
                {modules.map((module) => (
                  <Route {...module.routeProps} key={module.name} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Router>
    );
  }
}
