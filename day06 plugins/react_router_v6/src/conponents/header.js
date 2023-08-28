import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
export default function Header() {
  //API 控制路由
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const forward = () => {
    navigate(1);
  };
  return (
    <div>
      Header
      <div>
        <Button onClick={back}>后退</Button>
        <Button onClick={forward}>前进</Button>
      </div>
    </div>
  );
}
