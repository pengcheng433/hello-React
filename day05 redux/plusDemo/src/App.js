import React, { Component } from "react";
import CountContainer from "./contation/count"; //学习练习用到的
import DemoContainer from "./contation/demoUIComponent"; // 总结使用

// import store from "./redux/store";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <CountContainer store={store} /> */}
        {/* <CountContainer /> */}
        <DemoContainer />
      </div>
    );
  }
}
