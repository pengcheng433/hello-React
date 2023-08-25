import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { createAddplus } from "../../redux/action";
class demo extends Component {
  add = () => {
    //通知redex加1
    this.props.jiafun(1);
  };
  render() {
    console.log(this);
    return (
      <div>
        <h2>当前求和: {this.props.count}</h2>
        <Button onClick={this.add}>点我加1</Button>
      </div>
    );
  }
}

export default connect(
  //1状态
  (state) => ({ count: state }),
  //2操作状态
  {
    jiafun: createAddplus,
  }
)(demo);
