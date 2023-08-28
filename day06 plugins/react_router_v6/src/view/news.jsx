import React from "react";
import { useNavigationType ,} from "react-router-dom";
export default function News() {
  // 判断是如何来到这个页面
  const routerType =useNavigationType()
  console.log(routerType)
  return <div>News</div>;
}
