import React, { Component } from "react";
import PropsTypes from "prop-types";
import toparea from "./index.module.css";
export default class HeaderInput extends Component {
  constructor(props) {
    super(props);
  }
  //类型判断 props
  static propTypes = {
    addListFun: PropsTypes.func.isRequired,
  };
  inputRef = React.createRef();

  handleEnterKey = (e) => {
    if (this.inputRef.current.value && e.code == "Enter") {
      this.props.addListFun();
    }
  };

  render() {
    return (
      <div className={toparea.title}>
        <input
          onKeyUp={this.handleEnterKey}
          ref={this.inputRef}
          placeholder="请输入你的任务名称，按回车键确定"
        ></input>
      </div>
    );
  }
}
