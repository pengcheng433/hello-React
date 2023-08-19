import React, { Component } from "react";
import { Button, Select } from "antd";
import store from "./redux/store";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      options: [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
      ],
      temp: 1,
    };
  }

  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  handleChange = (val) => {
    this.setState({ temp: val });
  };
  addplus = () => {
    const { count, temp } = this.state;
    this.setState({ count: count + temp });
    console.log(count, temp);
  };
  subtract = () => {
    const { count, temp } = this.state;
    this.setState({ count: count - temp });
  };
  singplus = () => {
    const { count, temp } = this.state;
    if (count % 2 !== 0) {
      this.setState({ count: count + temp });
    }
  };
  awaitplus = async () => {
    let p = new Promise((resolve, reject) => {
      // setTimeout(() => {
      resolve(1);
      // }, 3000);
    });
    p.then((res) => {
      console.log(res);
      const { count, temp } = this.state;
      this.setState({ count: count + temp });
      console.log(3333);
    });
  };
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
    console.log(this.forceUpdate);
  }
  storeAdd = () => {
    store.dispatch({ type: "addplus", data: this.state.temp });
  };
  storesubtract = () => {
    store.dispatch({ type: "subtract", data: this.state.temp });
  };
  storesingplus = () => {
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch({ type: "addplus", data: this.state.temp });
    }
  };
  storesawaitplus = async () => {
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 3000);
    });
    p.then((res) => {
      store.dispatch({ type: "addplus", data: this.state.temp });
    });
  };
  render() {
    return (
      <div>
        <h1>React实现计算功能</h1>
        <p> {this.state.count} </p>
        <Select
          ref={this.selectRef}
          defaultValue="1"
          onChange={this.handleChange}
          style={{
            width: 200,
          }}
          options={this.state.options}
        />
        <Button type="primary" className="mt" onClick={this.addplus}>
          +
        </Button>
        <Button type="primary" className="mt" onClick={this.subtract}>
          -
        </Button>
        <Button type="primary" className="mt" onClick={this.singplus}>
          奇数新增
        </Button>
        <Button type="primary" className="mt" onClick={this.awaitplus}>
          异步新增
        </Button>
        <h1>Redux实现计算功能</h1>
        <p> {store.getState()} </p>
        <Button type="primary" className="mt" onClick={this.storeAdd}>
          +
        </Button>
        <Button type="primary" className="mt" onClick={this.storesubtract}>
          -
        </Button>
        <Button type="primary" className="mt" onClick={this.storesingplus}>
          奇数新增
        </Button>
        <Button type="primary" className="mt" onClick={this.storesawaitplus}>
          异步新增
        </Button>
      </div>
    );
  }
}
