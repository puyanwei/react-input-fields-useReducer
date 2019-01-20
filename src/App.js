import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  handleTextboxValue = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="element">
          Tell me your darkest secrets!
          <br />
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleTextboxValue}
          />
        </div>
      </div>
    );
  }
}

export default App;
