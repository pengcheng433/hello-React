import React, { Component } from "react";
import MyNavLink from "./MyNavLink";
import { Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import news from "../page/news";
import test from "../page/test";
export default class about extends Component {
  render() {
    return (
      <div>
        <h1>abhout</h1>
        abhout
        <div className="main">
          <div className="leftmain">
            <ul>
              <li>
                <MyNavLink to="/about/news" children="news"></MyNavLink>
              </li>
              <li>
                <MyNavLink to="/about/test">test</MyNavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightmain">
          <Switch>
            {/* 匹配路由组件 路由匹配一个正常后 不在继续向下执行 */}
            <Route path="/about/news" component={news} />
            <Route path="/about/test" component={test} />
            {/*重定向  */}
            <Redirect to="/about/test" />
          </Switch>
        </div>
      </div>
    );
  }
}
