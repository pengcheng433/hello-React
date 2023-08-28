import React, { Component } from "react";

export default class Error extends Component {
  //
  state = {
    hasError: "",
  };
  //判断报错  /生产环境
  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: error };
  }

  // 统计错误次数发给后台
  componentDidCatch() {
    console.log("componentDidCatch");
  }
  render() {
    return (
      <div>
        <h2>我是父组件Errorboundary</h2>
        {this.state.hasError ? <h2>报错</h2> : <Chiild />}
      </div>
    );
  }
}

class Chiild extends Component {
  state = {
    user: "111",
    // user: [
    //   {
    //     id: "001",
    //     name: "tom",
    //     age: 18,
    //   },
    //   {
    //     id: "002",
    //     name: "test",
    //     age: 12,
    //   },
    //   {
    //     id: "003",
    //     name: "erdan",
    //     age: 16,
    //   },
    // ],
  };
  render() {
    return (
      <div>
        <h2>我是child组件</h2>
        {this.state.user.map((item) => {
          return (
            <h4 key={item.id}>
              {item.name} --- {item.age}{" "}
            </h4>
          );
        })}
      </div>
    );
  }
}
