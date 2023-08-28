import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Button } from "antd";
import MyNavLink from "../../conponents/MyNavLink";

export default function Home() {
  const [state, setvalue] = useState(1);
  const changgename = () => {
    setvalue((state) => {
      return state + 1;
    });
  };
  return (
    <div>
      <h3>我是HOME页面</h3>
      {state == 2 ? (
        <Navigate to="/about/" />
      ) : (
        // replace={true}
        <h4>sum的值:{state}</h4>
      )}

      <Button onClick={() => setvalue(2)}>修改sum值</Button>

    {/* 方法一 */}
      <ul>
        <li>
          <MyNavLink to="news">news</MyNavLink>
        </li>
        <li>
          <MyNavLink to="message">message</MyNavLink>
        </li>
      </ul>


    {/* 方法二 */}

      {/* <ul>
        <li>
          <MyNavLink to="./news">news</MyNavLink>
        </li>
        <li>
          <MyNavLink to="./message">message</MyNavLink>
        </li>
      </ul> */}

    {/* 方法三 */}
      {/* <ul>
        <li>
          <MyNavLink to="/home/news">news</MyNavLink>
        </li>
        <li>
          <MyNavLink to="/home/message">message</MyNavLink>
        </li>
      </ul> */}
      <Outlet />
    </div>
  );
}
