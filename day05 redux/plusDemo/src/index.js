import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
// import { HashRouter } from "react-router-dom";
// 主题配置
import { ConfigProvider } from "antd";
// 修改区域文字
// import ja_JP from "antd/locale/ja_JP";
ReactDOM.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
//因为diff算法 对应的key的计算 性能不会全部重新比较,检测redux状态改变，改变就刷新render
store.subscribe(() => {
  ReactDOM.render(
    <ConfigProvider>
      <App />
    </ConfigProvider>,
    document.getElementById("root")
  );
});
