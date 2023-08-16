import React, { Component } from "react";
import List from "./index.module.css";
import pubSub from "pubsub-js";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
    };
  }
  componentDidMount() {
    this.event = pubSub.subscribe("MESSAGE", (msg, data) => {
      this.setState({ arr: data.items });
      console.log(this.state.arr);
    });
  }
  //销毁这个家伙
  componentWillUnmount() {
    pubSub.unsubscribe(this.event);
  }
  render() {
    return (
      <div className={List.wrap}>
        <div className={List.listMain}>
          {this.state.arr.map((item) => {
            return (
              <div key={Math.random()} className={List.item}>
                <img className={List.pic} src={item.avatar_url} />
                <span>{item.login}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
