import "./App.css";
import React, { Component } from "react";
import Layout from '../src/components/Layout/Layout'


import Qcards from "../src/components/QCards/QCards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Qcards />
        </Layout>
      </div>
    );
  }
}

export default App;
