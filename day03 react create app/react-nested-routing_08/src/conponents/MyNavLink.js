import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    const str = this.props.to.slice(1);
    console.log(this.props)
    return (
      <div>
        <NavLink
          to={this.props.to}
          activeClassName="selected"
          {...this.props}
        />
      </div>
    );
  }
}
