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
      sideNavbarMenuItems: [
        {
          route: '/dashboard',
          text: 'Dashboard',
          icon: 'fa fa-tachometer fa-2x',
        },
        {
          route: '/auction-house',
          text: 'Auction House',
          icon: 'fa fa-gavel fa-2x',
        },
        {
          route: '/warehouse-management',
          text: 'Warehouse Management',
          icon: 'fa fa-industry fa-2x',
        },
        {
          route: '/accounting',
          text: 'Accounting',
          icon: 'fa fa-university fa-2x',
        },
        {
          route: '/vendor-management',
          text: 'Vendor Management',
          icon: 'fa fa-shopping-basket fa-2x',
        },
        {
          route: '/client-management',
          text: 'Client Management',
          icon: 'fa fa-id-card-o fa-2x',
        },
        {
          route: '/active-tracking',
          text: 'Active Tracking',
          icon: 'fa fa-truck fa-2x',
        },
      ],
      currentTab: 'dashboard',
      isLoggedIn: false,
      user: null, // client || supplier
    };
  }

  test() {
    alert('test test');
  }

  render() {
    return (
      <Fragment>
        <Router>
          <div className='App'>
            {/* <header className='App-header'></header> */}
            <div className='wrapper'>
              <SideNavbarMenu items={this.state.sideNavbarMenuItems} />
              <div id='content'>
                <MainNavbarMenu />
                <MainContentContainer />
                <br />
                <h2>Create an article:</h2>
                <TextBox />
              </div>
            </div>
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
