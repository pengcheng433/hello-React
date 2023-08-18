import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { HashRouter } from "react-router-dom";
// 主题配置
import { ConfigProvider } from "antd";
// 修改区域文字
import ja_JP from "antd/locale/ja_JP";
ReactDOM.render(
  <ConfigProvider
    locale={ja_JP}
    theme={{
      token: {
        // Seed Token，影响范围大
        colorPrimary: "#00b96b",
        borderRadius: 2,

        // 派生变量，影响范围小
        colorBgContainer: "#f6ffed",
      },
    }}
  >
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
