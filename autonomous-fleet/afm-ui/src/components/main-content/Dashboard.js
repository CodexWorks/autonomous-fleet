import React, { Fragment } from 'react';
import CurrentOrdersContainer from './dashboard/client/CurrentOrdersContainer';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userRole: props.userRole,
      current_orders: res.data,
    };
  }
  render() {
    let dashboard;
    if (this.state.userRole === client) {
      dashboard = (
        <Fragment>
          <h2>Current Orders:</h2>
          <CurrentOrdersContainer />
          <br />
        </Fragment>
      );
    } else if (this.state.userRole === supplier) {
      dashboard = <Fragment></Fragment>;
    } else {
      dashboard = <h1>Something went wrong, please check your credentials.</h1>;
    }
    return dashboard;
  }
}
