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

import { Provider } from "react-redux";
ReactDOM.render(
  // 使用Provider包裹app,让app后代所有的子组件都接收子组件
  <Provider store={store} >
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
//因为diff算法 对应的key的计算 性能不会全部重新比较,检测redux状态改变，改变就刷新render
// store.subscribe(() => {
//   ReactDOM.render(
//     <ConfigProvider>
//       <App />
//     </ConfigProvider>,
//     document.getElementById("root")
//   );
// });

// 使用import { connect } from "react-redux";就不用检测了
