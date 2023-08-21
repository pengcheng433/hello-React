import React, { Component } from "react";
import { Button, Select } from "antd";
import store from "../../redux/store";
import {
  createAddplus,
  createSubtract,
  createAsyncAddplus,
} from "../../redux/action";
export default class count extends Component {
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
    console.log(this.props);
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
  //单独页面更新 render 因为redux里面的状态的值无法触发render
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.forceUpdate();
  //   });
  //   console.log(this.forceUpdate);
  // }
  storeAdd = () => {
    store.dispatch({ type: "ADDPLUS", data: this.state.temp });
  };
  storesubtract = () => {
    store.dispatch({ type: "SUBTRACT", data: this.state.temp });
  };
  storesingplus = () => {
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch({ type: "ADDPLUS", data: this.state.temp });
    }
  };
  storesawaitplus = async () => {
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 3000);
    });
    p.then((res) => {
      store.dispatch({ type: "ADDPLUS", data: this.state.temp });
    });
  };
  storeAddAction = () => {
    store.dispatch(createAddplus(this.state.temp));
  };
  storesubtractAction = () => {
    store.dispatch(createSubtract(this.state.temp));
  };
  storeAddAsyncAction = () => {
    store.dispatch(createAsyncAddplus(this.state.temp, 3000));
  };
  render() {
    console.log(this.props);

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
        <h1>Redux实现计算功能(dispatch 实现)</h1>
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
        <h1>Redux实现计算功能(action 实现)</h1>
        <p> {store.getState()} </p>
        <Button type="primary" className="mt" onClick={this.storeAddAction}>
          +
        </Button>
        <Button
          type="primary"
          className="mt"
          onClick={this.storesubtractAction}
        >
          -
        </Button>
        <Button
          type="primary"
          className="mt"
          onClick={this.storeAddAsyncAction}
        >
          异步新增
        </Button>
        <h1>React-Redux实现计算功能(实现)</h1>
        <p> {this.props.count} 使用this.props.store.getState()</p>
        <Button
          type="primary"
          className="mt"
          onClick={() => this.props.jia(this.state.temp)}
        >
          +++
        </Button>
        <Button
          type="primary"
          className="mt"
          onClick={() => this.props.jian(this.state.temp)}
        >
          ---
        </Button>
        <Button
          type="primary"
          className="mt"
          onClick={() => this.props.AsycJia(this.state.temp,5000)}
        >
          Async+++
        </Button>
      </div>
    );
  }
}
