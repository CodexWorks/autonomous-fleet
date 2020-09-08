import React from 'react';
import { NavLink } from 'react-router-dom';

// ############### Constructor ###############
export default class SideNavbarMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryText: props.primaryText,
      route: props.route,
      icon: props.icon,
      active: props.active,
    };
  }

  // ############# RENDER ###########
  render() {
    let displayComponent = this.state.primaryText
      .split(' ')
      .join('')
      .toLowerCase();
    return (
      <li>
        <NavLink
          to={this.state.route}
          activeClassName='active'
          data-cy={displayComponent}
          activeStyle={{
            fontWeight: 'bold',
            background: '#6d7fcc',
          }}
        >
          <i className={this.state.icon} /> {/* sets font awesome icon class */}
          <span>{this.state.primaryText}</span>
        </NavLink>
      </li>
    );
  }
}
