import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    const str = this.props.to.slice(1);
    return (
      <div>
        <NavLink
          to={this.props.to}
        className={(e)=>e.isActive?"selected":''}
          {...this.props}
        />
      </div>
    );
  }
}