import React, { Component } from "react";
import Hello from "./components/Hello"; //index 就可以不需要了两成index了
import Welcome from "./components/Welcome";
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}
