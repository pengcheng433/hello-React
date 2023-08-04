import React, { Component } from "react";
import axios from "axios";
export default class App extends Component {
  getListData = () => {
    axios.get("/api1/test").then(
      (response) => {
        console.log(response)

      },
      (error) => {
        console.log(error)
      }
    );
  };
  getListArr =()=>{
    axios.get("/api2/test2").then(
      (response) => {
        console.log(response)

      },
      (error) => {
        console.log(error)
      }
    );
  }
  render() {
    return (
      <div>
        <button onClick={this.getListData}>getdata</button>
        <button onClick={this.getListArr}>getArr</button>
      </div>
    );
  }
}
