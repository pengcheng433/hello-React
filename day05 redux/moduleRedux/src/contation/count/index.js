import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { createAddplus } from "../../redux/action/count";
class demo extends Component {
  add = () => {
    //通知redex加1
    this.props.jiafun(1);
  };
  render() {
    console.log(this);
    return (
      <div>
        <h2>count 组件</h2>
        <h2>person 组件 reduxer取值 当前人数为：{this.props.personCount}</h2>
        <h2>当前求和: {this.props.count}</h2>
        <Button onClick={this.add}>点我加1</Button>
      </div>
    );
  }
}

export default connect(
  //1状态
  (state) => ({
    count: state.count,
    personCount: state.person.length,
  }),
  //2操作状态
  {
    jiafun: createAddplus,
  }
)(demo);
