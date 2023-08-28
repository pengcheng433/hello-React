import React, { Component, PureComponent } from "react";
import { Button } from "antd";
// 父组件render 子组件就render 效率底
// 只有数据的state或者props发生改变才重新redner   效率高
export default class Parent extends PureComponent {
  state = {
    tempName: "润润润",
  };
  changge = () => {
    //state 里面的值不修改不render
    //修改了里面的值 才进行render
    this.setState({
      tempName: "new run run run ",
    });
    // this.setState({});
  };
  // PureComponent 自带
  // shouldComponentUpdate(nextProps, nextState) {
  //   return JSON.stringify(nextState) == JSON.stringify(this.state) &&
  //     JSON.stringify(nextProps) == JSON.stringify(this.props)
  //     ? false
  //     : true;
  // }
  render() {
    console.log("redner 我是parent");
    return (
      <div>
        <h2>我是parent 组件</h2>
        <span>{this.state.tempName}</span>
        <Button onClick={this.changge}>CHANGGE</Button>
        <Child car={"111"} />
      </div>
    );
  }
}

class Child extends PureComponent {
  // PureComponent 自带
  // shouldComponentUpdate(nextProps, nextState) {
  //   return JSON.stringify(nextState) == JSON.stringify(this.state) &&
  //     JSON.stringify(nextProps) == JSON.stringify(this.props)
  //     ? false
  //     : true;
  // }
  render() {
    console.log("redner 我是child");

    return (
      <div>
        <h2>我是child 组件</h2>
        <span>{this.props.car}</span>
      </div>
    );
  }
}
