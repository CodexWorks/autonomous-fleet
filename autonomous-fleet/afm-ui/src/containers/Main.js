import React, { Component, Fragment } from 'react';

import { withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import modules from '../modules';

import '../css/App.css';
import '../js/main.js';

import appConfig from '../utils/appConfig.json';

import MainNavbarMenu from './MainNavbarMenu';
import SideNavbarMenu from './SideNavbarMenu';

import Orders from '../components/modules/Orders';
import Companies from '../components/modules/Companies';
import CreateCompany from '../components/modules/companies/CreateCompany';
import AuctionHouse from '../components/modules/AuctionHouse';
import LandingPage from './LandingPage';

// ############### Constructor ###############
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideNavbarMenuItems: appConfig.routes,
      currentTab: 'dashboard',
      isLoggedIn: false,
      user: ""
      
    };
    this.addAName=this.addAName.bind(this);
  }

  handleChange = (event) => {};
  

  addAName(name){
    this.setState({user:name});

  };

  // ############# RENDER ###########
  render() {
    return (
      
      <Router>
        <div>
          
          {localStorage.getItem('token') === "null" ? (
            <div>
              {/* Remove route */}
            <LandingPage nameTheUser={this.addAName}/>
            </div>
          ) : (
           //<LandingPage >
            <div>
              
              <div className='wrapper'>
                <SideNavbarMenu items={this.state.sideNavbarMenuItems} />
                <div>{this.props.isAuthenticated}</div>
                <div id='content'>
                  <MainNavbarMenu username={this.state.user}/>

                  <Route exact path='/transport-orders' component={Orders} />
                  <Route path='/companies' component={CreateCompany} />
                  <Route path='/companies' component={Companies} />
                  <Route path='/auction-house' component={AuctionHouse} />
                </div>
              </div>
              <div className='App-content'>
                {modules.map((module) => (
                  <Route {...module.routeProps} key={module.name} />
                ))}
              </div>
            </div>
           // </LandingPage>
          )}
          
        </div>
        
      </Router>
      
    );
  }
}

export default Main;
