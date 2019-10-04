import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";

import DisplayExample from "./components/DisplayExamples/DisplayExample";

export default class App extends Component {
  constructor() {
    super();
    this.state = { exampleToShow: "none" };
  }
  displayNavigationExample() {
    console.log("nav examnple");
  }
  render() {
    return (
      <>
        <ButtonToolbar>
          <Button
            variant="outline-primary"
            onClick={() => this.setState({ exampleToShow: "Fetch Examples" })}
          >
            Fetch Examples
          </Button>
          <Button
            variant="outline-primary"
            onClick={() =>
              this.setState({ exampleToShow: "SearchMovieDB Examples" })
            }
          >
            SearchMovieDB Examples
          </Button>
          <Button
            variant="outline-primary"
            onClick={() =>
              this.setState({ exampleToShow: "ThirdPartyPackages Examples" })
            }
          >
            ThirdPartyPackages Examples
          </Button>
        </ButtonToolbar>
        <div style={{ marginTop: "20px" }}>
          <DisplayExample exampleName={this.state.exampleToShow} />
        </div>
      </>
    );
  }
}
