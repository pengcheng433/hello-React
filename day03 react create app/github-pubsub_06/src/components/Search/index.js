import React, { Component } from "react";
import axios from "axios";
import pubSub from "pubsub-js";
export default class index extends Component {
  getList = async () => {
    const searchstr = this.InputRef.current.value;
    axios.get(`https://api.github.com/search/users?q=${searchstr}`).then(
      (response) => {
        // console.log(response);
        // pubSub.publish("MESSAGE", response.data);
        // const {
        //   data: { items },
        // } = response;
        // console.log(items);
        // const newArr = items.map((item) => {
        //   return {
        //     pic: item.avatar_url,
        //     nmae: item.login,
        //   };
        // });
        // this.setState({ arr: newArr });
      },
      (error) => {
        console.log(error);
        this.setState({ arr: [] });
      }
    );

    //教学fetch
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchstr}`
      );
      const arr = await response.json();
      console.log(arr.items);
    } catch (error) {
      console.log("Request Failed", error);
    }
  };
  InputRef = React.createRef();

  render() {
    return (
      <div>
        <input ref={this.InputRef} placeholder="serach"></input>
        <button onClick={this.getList}>serach</button>
      </div>
    );
  }
}
