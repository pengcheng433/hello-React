import React, { Component } from "react";
import ListMain from "./components/List-main";
import Search from "./components/Search";
export default class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <ListMain />
      </div>
    );
  }
}
