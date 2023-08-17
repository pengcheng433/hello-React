import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class header extends Component {
  back = () => {
    console.log(this);
  };
  forward = () => {};
  go = () => {};
  render() {
    return (
      <div>
        <button onClick={this.back}>back</button>
        <button onClick={this.forward}>forward</button>
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}
// 使用withRouter函数 加工组件  给对象组件拥有路由组件的API
export default withRouter(header);
// export default header;
