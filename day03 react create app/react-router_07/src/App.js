import "./App.css";

import React, { Component } from "react";
import { Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import About from "./conponents/about";
import home from "./conponents/home";
import MyNavLink from "./conponents/MyNavLink";
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React Router Demo</h1>

        <div className="main">
          <div className="leftmain">
            <ul>
              {/* 封装标签体内容 */}
              <li>
                <MyNavLink to="/about" children="About"></MyNavLink>
              </li>
              <li>
                <MyNavLink to="/home">Home</MyNavLink>
              </li>
            </ul>
          </div>
          <div className="rightmain">
            <Switch>
              {/* 匹配路由组件 路由匹配一个正常后 不在继续向下执行 */}
              <Route path="/about" component={About} />
              <Route path="/home" component={home} />
              <Route path="/home" component={About} />
              {/* exact 严格匹配路由 */}
              <Route path="/match" component={About} exact={true} />
              {/*重定向  */}
              <Redirect to="match" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
