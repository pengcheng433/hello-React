import React, { Component } from "react";
import PropsTypes from "prop-types";
export default class CountItem extends Component {
  constructor(props) {
    super(props);
  }

  //类型判断 props
  static propTypes = {
    list: PropsTypes.array.isRequired,
    deleteCheckFun: PropsTypes.func.isRequired,
    setListCheckFun: PropsTypes.func.isRequired,
  };
  checkboxRef = React.createRef();

  onChangeInput = (e) => {
    this.props.setListCheckFun(e.target.checked);
  };

  deleteCheck = () => {
    this.props.deleteCheckFun();
    console.log((this.checkboxRef.current.checked = false));
  };
  render() {
    const { list } = this.props;

    const current = list.reduce(
      (count, obj) => (obj.checked === true ? count + 1 : count),
      0
    );
    return (
      <div>
        <input
          checked={list.length == current && current !== 0}
          ref={this.checkboxRef}
          onChange={(e) => this.onChangeInput(e)}
          type="checkbox"
        />
        <label>
          已经完成{current}/全部{list.length}
        </label>
        <button onClick={this.deleteCheck}>清除已完成任务</button>
      </div>
    );
  }
}
