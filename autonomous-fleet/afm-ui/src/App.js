import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './Main';

class App extends Component {
  render() {
    return <Main {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
  };
};

export default connect(mapStateToProps)(App);
