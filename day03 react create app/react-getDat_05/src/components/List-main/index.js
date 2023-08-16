import React, { Component } from "react";
import List from "./index.module.css";
export default class index extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.listdata);
  }
  render() {
    return (
      <div className={List.wrap}>
        <div className={List.listMain}>
          {this.props.listdata.map((item) => {
            return (
              <div key={Math.random()} className={List.item}>
                <img className={List.pic} src={item.pic} />
                <span>{item.name}</span>
              </div>
            );
          })}

          {/* <div className={List.item}>
            <img
              className={List.pic}
              src="https://avatars.githubusercontent.com/u/49235483?v=4"
            />
            <span>name</span>
          </div>
          <div className={List.item}>
            <img
              className={List.pic}
              src="https://avatars.githubusercontent.com/u/49235483?v=4"
            />
            <span>name</span>
          </div>
          <div className={List.item}>
            <img
              className={List.pic}
              src="https://avatars.githubusercontent.com/u/49235483?v=4"
            />
            <span>name</span>
          </div> */}
        </div>
      </div>
    );
  }
}
