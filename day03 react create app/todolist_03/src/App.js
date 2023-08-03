import React, { Component } from "react";
import "./App.css";
import HeaderInput from "./components/HeaderInput";
import List from "./components/List";
import Count from "./components/Count";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        { str: "test", checked: false },
        { str: "代码", checked: false },
      ],
    };
  }
  headerInput = React.createRef();
  addListFun = () => {
    let { value } = this.headerInput.current.inputRef.current;
    const oldArr = this.state.arr;
    this.setState({
      arr: [{ str: value, checked: false }, ...oldArr],
    });
    this.headerInput.current.inputRef.current.value = "";
  };
  setListCheck = (value) => {
    let { arr } = this.state;
    for (const item of arr) {
      item.checked = value;
    }
    this.setState({ arr });
  };
  deleteCheck = () => {
    let { arr } = this.state;
    // eslint-disable-next-line array-callback-return
    let newArr = arr.filter((item) => {
      if (!item.checked) {
        return item;
      }
    });
    this.setState({ arr: newArr });
  };
  deleteitem = (obj) => {
    const { arr } = this.state;
    const index = arr.indexOf(obj);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    this.setState({ arr });
  };
  setItemCheck = (val, obj) => {
    let { arr } = this.state;
    for (const item of arr) {
      if (item === obj) {
        item.checked = val;
      }
    }
    this.setState({ arr });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="main">
            <div className="main-wrap">
              <HeaderInput
                ref={this.headerInput}
                addListFun={this.addListFun}
              />
            </div>
            <div className="main-list">
              <List
                list={this.state.arr}
                setItemCheckFun={this.setItemCheck}
                deleteitemFun={this.deleteitem}
              ></List>
            </div>
            <div className="main-bottom">
              <Count
                list={this.state.arr}
                setListCheckFun={this.setListCheck}
                deleteCheckFun={this.deleteCheck}
              />
            </div>
          </div>
        </header>
      </div>
    );
  }
}
