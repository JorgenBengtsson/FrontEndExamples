import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { pageTitle: props.Title };
  }
  render() {
    return (
      <div>
        <p>{this.props.Title}</p>
        <nav>
          <a
            href=""
            onClick={e => {
              e.preventDefault();
              this.props.onPageSelection("Home");
            }}
          >
            Home
          </a>
          <a
            href=""
            onClick={e => {
              e.preventDefault();
              this.props.onPageSelection("Movie");
            }}
          >
            Movies
          </a>
          <a
            href=""
            onClick={e => {
              e.preventDefault();
              this.props.onPageSelection("About");
            }}
          >
            About
          </a>
        </nav>
      </div>
    );
  }
}
