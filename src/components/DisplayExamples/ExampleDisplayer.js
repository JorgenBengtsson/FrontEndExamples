import React, { Component } from "react";

export default class ExampleDisplayer extends Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid grey",
          marginBottom: "5px",
          padding: "5px"
        }}
      >
        <h2>{this.props.title}</h2>
        <p style={{ fontSize: "10px" }}>{this.props.desc}</p>
        {this.props.children}
      </div>
    );
  }
}
