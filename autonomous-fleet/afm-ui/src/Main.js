import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import modules from './modules';
import MainNavbarMenu from './components/MainNavbarMenu';
import SideNavbarMenu from './components/SideNavbarMenu';
import './css/App.css';
import './js/main.js';
import MainContentContainer from './components/MainContentContainer';
import TextBox from './components/TextBox';
import CurrentOrdersContainer from './components/main-content/dashboard/client/CurrentOrdersContainer';
import appConfig from './appConfig';

// ############### Constructor ###############
export default class Main extends Component {
  constructor() {
    super();

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
          <div className='wrapper'>
            <SideNavbarMenu items={this.state.sideNavbarMenuItems} />

            <div id='content'>
              <MainNavbarMenu />

              <MainContentContainer />

              <TextBox {...this.props} />

              <CurrentOrdersContainer />
            </div>
          </div>
          <div className='App-content'>
            {modules.map((module) => (
              <Route {...module.routeProps} key={module.name} />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}
