import Lazyload from "./view/lazyload";
import Header from "./conponents/header";
import React from "react";
import { useInRouterContext } from "react-router-dom";
export default function App() {
  //被BrowserRouter包裹的组件就会返回true
  console.log(useInRouterContext()); //true||false
  return (
    <div>
      <Header />
      <Lazyload />
    </div>
  );
}
