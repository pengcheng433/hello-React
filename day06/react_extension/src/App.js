import React, { Component } from "react";
import Setstate from "./view/setstate";
import Lazyload from "./view/lazyload";

export default class App extends Component {
  render() {
    return (
      <div>
        <Setstate />
        <Lazyload />
      </div>
    );
  }
}
