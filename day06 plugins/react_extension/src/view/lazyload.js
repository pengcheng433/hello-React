import React, { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import MyNavLink from "../conponents/MyNavLink";
// import about from "./lazy/about";
// import home from "./lazy/home";

const about = lazy(() => import("./lazy/about"));
const home = lazy(() => import("./lazy/home"));
export default class Lazyload extends Component {
  render() {
    return (
      <div>
        <h2>Lazyload 懒加载组件</h2>
        <ul>
          <li>
            <MyNavLink to="/about">about</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home">Home</MyNavLink>
          </li>
        </ul>
        {/* 不可以使用懒加载 */}
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {/* 匹配路由组件 路由匹配一个正常后 不在继续向下执行 */}
            <Route path="/about" component={about} />
            <Route path="/home" component={home} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
