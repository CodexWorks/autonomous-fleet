import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import modules from './modules';
import MainNavbarMenu from './components/MainNavbarMenu';
import SideNavbarMenu from './components/SideNavbarMenu';
import './css/App.css';
import './js/main.js';
// import MainContentContainer from './components/MainContentContainer';
import Orders from './components/main-content/dashboard/client/Orders';
import CurrentCompanies from './components/main-content/dashboard/client/CurrentCompanies';
import CreateCompany from './components/main-content/dashboard/client/micro-components/CreateCompany';
import appConfig from './appConfig';

import LandingPage from './components/LandingPage';
// import TextBox from './components/TextBox';

// ############### Constructor ###############
class Main extends Component {
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
        <div className='App'>
          {localStorage.getItem('token') !== null ? (
            <Route path='/' component={LandingPage} />
          ) : (
            // <LandingPage />
            <div>
              <div className='wrapper'>
                <SideNavbarMenu items={this.state.sideNavbarMenuItems} />
                <div>{this.props.isAuthenticated}</div>
                <div id='content'>
                  <MainNavbarMenu />

                  <Route exact path='/transport-orders' component={Orders} />
                  <Route path='/companies' component={CreateCompany} />
                  <Route path='/companies' component={CurrentCompanies} />
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

export default withRouter(Main);
