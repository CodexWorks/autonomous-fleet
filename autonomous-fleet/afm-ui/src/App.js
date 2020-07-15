import React, { Component } from 'react';
import Main from './Main';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return <Main {...this.props} />;
  }
}

const mapStateToProps = state =>{
  return {
    isAuthenticated: state.token !== null
  } 
}

export default connect(mapStateToProps)(App);