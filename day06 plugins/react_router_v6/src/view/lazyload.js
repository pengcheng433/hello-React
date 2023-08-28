import React from "react";
import { useRoutes } from "react-router-dom";
import MyNavLink from "../conponents/MyNavLink";
import routes from "../routes";

export default function Lazyload() {
  //   路由表
  const AllRoutes = useRoutes(routes);
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
      {/* 注册路由 V6*/}
      {AllRoutes}
      {/*
      <Routes>
        <Route  path="/about" element={<About />} />
        <Route  path="/Home" element={<Home />} />
      </Routes> */}
    </div>
  );
}
