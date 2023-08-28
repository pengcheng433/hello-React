import React, { Component, createContext } from "react";
import { Button } from "antd";
import { Fragment } from "react";
const NAME_CONTEXT = createContext();
export default class Context extends Component {
  state = {
    userName: "二蛋",
    age: 18,
  };
  setContext = () => {
    this.setState({
      userName: "lpc",
    });
  };
  render() {
    return (
      <div>
        <h3>我是Context组件 我的名字是{this.state.userName} </h3>
        {/* 必须使用value 放入值 */}
        <NAME_CONTEXT.Provider value={this.state}>
          <B />
        </NAME_CONTEXT.Provider>
        <Button onClick={this.setContext}>修改</Button>
      </div>
    );
  }
}

class B extends Component {
  // 必须声明为   static contextType
  static contextType = NAME_CONTEXT; //使静态什么才有效果
  render() {
    return (
      <div>
        <h3>
          我是B组件 接收到的名字是{this.context.userName}
          {this.context.age}
        </h3>
        <C />
      </div>
    );
  }
}

class C extends Component {
  static contextType = NAME_CONTEXT;
  render() {
    return (
      <div>
        <h3>
          我是C组件 接收到的名字是{this.context.userName}
          {this.context.age}
          <D />
        </h3>
      </div>
    );
  }
}
// 函数式 使用createContext
function D() {
  return (
    <NAME_CONTEXT.Consumer>
      {(value) => {
        return (
          <div>
            <h3>
              我是D组件 接收到的名字是{value.userName}
              {value.age}
            </h3>
          </div>
        );
      }}
    </NAME_CONTEXT.Consumer>
  );
}
