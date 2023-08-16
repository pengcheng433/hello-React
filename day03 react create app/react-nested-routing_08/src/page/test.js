import React, { Component } from "react";
import Detail from "./detail";
import { Link, Route } from "react-router-dom";

export default class test extends Component {
  state = {
    arr: [
      { id: 1, title: "消息1" },
      { id: 2, title: "消息2" },
      { id: 3, title: "消息3" },
    ],
  };
  render() {
    const { arr } = this.state;
    return (
      <div>
        <ul>
          {arr.map((item) => {
            return (
              // 携带params参数
              <div key={Math.random()}>
                <Link
                  key={Math.random()}
                  to={`/about/test/detail/${item.id}/${item.title}`}
                >
                  {item.title}
                </Link>
                {/* 携带search参数 */}
                <Link
                  key={Math.random()}
                  to={`/about/test/detail/?id=${item.id}&title=${item.title}`}
                >
                  {item.title}
                </Link>
                {/* router-state参数 */}
                <Link
                  key={Math.random()}
                  to={{
                    pathname: "/about/test/detail/",
                    state: { id: 1, title: "title" },
                  }}
                >
                  {item.title}
                </Link>
              </div>
            );
          })}
        </ul>
        {/* 携带params参数 */}
        {/* <Route path="/about/test/detail/:id/:title" component={Detail} /> */}
        {/* 携带search参数 */}
        {/* <Route path="/about/test/detail" component={Detail} /> */}
        {/* 携带state参数 */}
        <Route path="/about/test/detail" component={Detail} />

      </div>
    );
  }
}
