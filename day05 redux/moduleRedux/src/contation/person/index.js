import React, { Component } from "react";
import { Input, Button } from "antd";
import { nanoid } from "nanoid"; //nanoid  唯一ID
import { createAsyncAddplus, poparritem } from "../../redux/action/person";
import { connect } from "react-redux";
import Item from "antd/es/list/Item";

class Person extends Component {
  addpersonFun = () => {
    const name = this.name.input.value;
    const age = this.age.input.value;
    const personObj = { id: nanoid(), name, age };

    this.props.addperson(personObj);
  };
  poppersonFun = () => {
    this.props.popperson();
  };

  render() {
    // console.log(this);
    return (
      <div>
        <h2>Person 组件</h2>
        <h2>
          count 组件 reducer 取值
          {this.props.count}
        </h2>
        <Input ref={(e) => (this.name = e)} placeholder="Basic usage" />
        <Input ref={(e) => (this.age = e)} placeholder="Basic usage" />
        <Button type="primary" onClick={this.addpersonFun}>
          添加
        </Button>
        <Button type="primary" onClick={this.poppersonFun}>
          删除
        </Button>
        <ul>
          {this.props.personarr.map((Item) => {
            return (
              <li key={Item.id}>
                {Item.name}-{Item.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  //1状态
  (state) => ({
    personarr: state.person,
    count: state.count,
  }),
  //2操作状态
  {
    addperson: createAsyncAddplus,
    popperson: poparritem,
  }
)(Person);
