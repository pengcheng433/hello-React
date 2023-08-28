import React, { useState } from "react";
// import MyNavLink from "../conponents/MyNavLink";
import { Link, Outlet, useNavigate, } from "react-router-dom";
import { Button } from "antd";
import Detail from "./detail";
export default function Message() {
  const [meaageArr] = useState([
    {
      id: "1",
      title: "消息1",
      content: "content1",
    },
    {
      id: "2",
      title: "消息2",
      content: "content2",
    },
    {
      id: "3",
      title: "消息3",
      content: "content3",
    },
    {
      id: "4",
      title: "消息4",
      content: "content4",
    },
    {
      id: "5",
      title: "消息5",
      content: "content5",
    },
  ]);
  const usenavigate = useNavigate();
  const gotoURL = (obj) => {
    // console.log(usenavigate)
    // usenavigate("detail",{state:{id:1,title:"123123",content:"内容"}})
    // usenavigate("detail",{replace:false,state:{id:1,title:"123123",content:"内容"}})
    usenavigate("detail", {
      state: {
        ...obj,
      },
    });
  };
  return (
    <div>
      <div>
        <h3>Message</h3>
        {meaageArr.map((item) => {
          return (
            // params
            // <Link
            //   key={item.id}
            //   to={`detail/${item.id}/${item.title}/${item.content}`}
            // >
            //   {item.title}
            // </Link>

            //search
            // <Link
            //   key={item.id}
            //   to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}
            // >
            //   {item.title}
            // </Link>

            //state
            <Link
              key={item.id}
              to="detail"
              state={{
                id: 1,
                title: "title1",
                content: "Contet1",
              }}
            >
              {item.title}
            </Link>
          );
        })}
        {meaageArr.map((item) => {
          return (
            <Button key={item.id} onClick={() => gotoURL(item)}>
              GO
            </Button>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}
