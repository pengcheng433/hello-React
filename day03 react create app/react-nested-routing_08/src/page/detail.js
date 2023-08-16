import React, { Component } from "react";
import qs from "qs";
const detaildata = [
  {
    id: "1",
    titel: "titel1",
    content: "content1",
  },
  {
    id: "2",
    titel: "titel2",
    content: "content2",
  },
  {
    id: "3",
    titel: "titel3",
    content: "content3",
  },
];
export default class detail extends Component {
  render() {
    // params参数
    const { id, title } = this.props.match?.params;
    let content;
    if (id) {
      const obj = detaildata.find((item) => item.id == id.toString());
      let { content } = obj;
    }
    console.log("params");
    console.log({ id, title, content });

    // search 参数
    const { search } = this.props.location;
    console.log("search");
    console.log(qs.parse(search.slice(1)));
    // state 参数
    const { state } = this.props.location || {};
    console.log("state:");

    console.log(state);

    return (
      <div>
        <ul>
          <li>id:{id}</li>
          <li>titel:{title}</li>
          <li>content:{content || ""}</li>
        </ul>
      </div>
    );
  }
}
