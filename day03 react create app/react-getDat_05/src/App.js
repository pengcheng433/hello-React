import React, { Component } from "react";
import axios from "axios";
import ListMain from "./components/List-main";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {
          pic: "https://avatars.githubusercontent.com/u/49235483?v=4",
          name: "name1",
        },
        {
          pic: "https://avatars.githubusercontent.com/u/49235483?v=4",
          name: "name2",
        },
      ],
    };
  }
  static getDerivedStateFromProps = (prevProps, prevState) => {
    // const a = new App(prevProps);
    //  a.getList()
    return null;
  };
  getList = () => {
    const searchstr = this.InputRef.current.value;
    axios.get(`https://api.github.com/search/users?q=${searchstr}`).then(
      (response) => {
        console.log(response);
        const {
          data: { items },
        } = response;
        console.log(items);
        const newArr = items.map((item) => {
          return {
            pic: item.avatar_url,
            nmae: item.login,
          };
        });
        this.setState({ arr: newArr });
      },
      (error) => {
        console.log(error);
        this.setState({ arr: [] });
      }
    );
  };

  InputRef = React.createRef();
  render() {
    console.log("render");
    return (
      <div>
        <input ref={this.InputRef} placeholder="serach"></input>
        <button onClick={this.getList}>serach</button>
        <ListMain listdata={this.state.arr} />
      </div>
    );
  }
}
