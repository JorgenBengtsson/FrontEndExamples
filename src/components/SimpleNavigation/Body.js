import React, { Component } from "react";

export default class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.pageToView}</div>;
  }
}
