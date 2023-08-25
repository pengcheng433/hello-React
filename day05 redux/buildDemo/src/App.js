import React, { Component } from "react";
import Count from "./contation/count"; // 容器组件
import Person from "./contation/person"; // 容器组件

// import store from "./redux/store";

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <Person />
      </div>
    );
  }
}
