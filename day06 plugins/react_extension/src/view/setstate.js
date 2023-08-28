import React, { Component } from "react";
import { Button } from "antd";
export default class setstate extends Component {
  state = {
    count: 0,
  };
  add = () => {
    //后续动作为异步
    // this.setState({ count: this.state.count + 1 });
    // //0
    // console.log(this.state.count);

    // 对象式式  利用调用函数实现使用最新值的业务操作
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log(this.state.count);
    // });

    //
    this.setState((state, props) => {
      console.log(state);
      return { count: state.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <h1>Setstate</h1>
        <h1>{this.state.count}</h1>
        <Button onClick={this.add}>点击+1</Button>
      </div>
    );
  }
}
