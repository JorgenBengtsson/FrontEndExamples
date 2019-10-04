import React, { Component } from "react";

import ExampleSwitchRender from "./ExampleSwitchRender";

export default class DisplayExample extends Component {
  render() {
    return <ExampleSwitchRender param={this.props.exampleName} />;
  }
}
