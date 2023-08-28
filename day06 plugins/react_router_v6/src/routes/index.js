import { useRoutes, Navigate } from "react-router-dom";
import About from "../view/lazy/about";
import Home from "../view/lazy/home";
import Message from "../view/message";
import News from "../view/news";
import Detail from "../view/detail";

export default [
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "message",
        element: <Message />,
        children: [
          {
            // 1声明接收   // params方式
            // path: "detail/:id/:title/:content",
            //search/state 方式
            path: "detail",
            element: <Detail />,
          },
        ],
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/about/" />,
  },
];
