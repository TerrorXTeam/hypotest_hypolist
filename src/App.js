import "./App.css";
import React, { Component } from "react";

import Qcards from "../src/components/QCards/QCards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Qcards />
      </div>
    );
  }
}

export default App;
