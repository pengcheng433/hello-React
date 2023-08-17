import React, { Component } from "react";
import Detail from "./detail";
import { Link, Route, Router } from "react-router-dom";

export default class test extends Component {
  state = {
    arr: [
      { id: 1, title: "消息1" },
      { id: 2, title: "消息2" },
      { id: 3, title: "消息3" },
    ],
  };
  pushgo = () => {
    this.props.history.push("/about/test/detail", { id: 1, title: "title" });
  };
  replacego = () => {
    this.props.history.replace("/about/test/detail", { id: 1, title: "title" });
  };
  render() {
    const { arr } = this.state;
    return (
      <div>
        <ul>
          {arr.map((item) => {
            return (
              // 携带params参数
              <div key={Math.random()}>
                <Link
                  key={Math.random()}
                  to={`/about/test/detail/${item.id}/${item.title}`}
                >
                  {item.title}
                </Link>
                {/* 携带search参数 */}
                <Link
                  key={Math.random()}
                  to={`/about/test/detail/?id=${item.id}&title=${item.title}`}
                >
                  {item.title}
                </Link>
                {/* router-state参数 */}
                <Link
                  key={Math.random()}
                  to={{
                    pathname: "/about/test/detail/",
                    state: { id: 1, title: "title" },
                  }}
                >
                  {item.title}
                </Link>
                {/* 使用onlick 调用路由 */}
                <button onClick={this.pushgo}>push查看</button>
                <button onClick={this.replacego}>replace查看</button>
              </div>
            );
          })}
        </ul>
        {/* 携带params参数 */}
        {/* <Route path="/about/test/detail/:id/:title" component={Detail} /> */}
        {/* 携带search参数 */}
        {/* <Route path="/about/test/detail" component={Detail} /> */}
        {/* 携带state参数 */}
        {/* <Route path="/about/test/detail" component={Detail} /> */}

        {/*开启replace模式为替换当前路由   默认是push模式  push模式会存在历史路由*/}
        <Route replace={true} path="/about/test/detail" component={Detail} />
      </div>
    );
  }
}
