import React, { Component } from "react";
import { Button, Pagination  } from "antd";
export default class App extends Component {
  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  render() {
    return (
      <div>
        <button>111</button>
        <Button type="primary">的发我打的是</Button>
        <Pagination
          showSizeChanger
          showQuickJumper
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={3}
          total={500}
        />
      </div>
    );
  }
}
