import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './containers/Main';

class App extends Component {
  render() {
    
    localStorage.setItem('token',null);
    return (
    <div>
      
      <Main {...this.props} />
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
  };
};

export default connect(mapStateToProps)(App);
