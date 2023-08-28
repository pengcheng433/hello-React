import React, { Component } from "react";
import Setstate from "./view/setstate";
import Lazyload from "./view/lazyload";
import HooksDemo from "./hooks";
import { Fragment } from "react";
import Context from "./view/context";
import PureComponent from "./view/PureComponent";
import Errorbound from "./view/ErrorBoundary";
export default class App extends Component {
  render() {
    return (
      <div>
        <Setstate />
        <Lazyload />
        <HooksDemo />
        {/* hook demo */}
        <Fragment key={1}>1111</Fragment>
        <>2222</>
        <Context />
        {/* context */}

        <PureComponent />
        <Errorbound />
      </div>
    );
  }
}
