import React, { Component } from "react";
import List from "./index.module.css";
import PropsTypes from "prop-types";
export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  //类型判断 props
  static propTypes = {
    list: PropsTypes.array.isRequired,
    setItemCheckFun: PropsTypes.func.isRequired,
    deleteitemFun: PropsTypes.func.isRequired,
  };
  onChangeInput = (e, value) => {
    const flag = e.target.checked;
    this.props.setItemCheckFun(flag, value);
  };
  deleteitem = (item) => {
    this.props.deleteitemFun(item);
  };

  onMouseLeave = (e) => {
    console.log(e);
  };
  onMouseEnter = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((item) => {
            return (
              <li
                key={Math.random()}
                onMouseLeave={this.onMouseLeave}
                onMouseEnter={this.onMouseEnter}
              >
                <input
                  onChange={(e) => this.onChangeInput(e, item)}
                  type="checkbox"
                  checked={item?.checked}
                  id="subscribeNews"
                  name="subscribe"
                  value="newsletter"
                />
                <label>{item.str}</label>

                <button
                  onClick={() => this.deleteitem(item)}
                  className={List.shown}
                >
                  删除该元素
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
