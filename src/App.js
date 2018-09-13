import React, { Component } from "react";
import "./App.css";
import Tabs from "./components/Tabs";
import OptionPanel from "./components/OptionPanel";
import ArtDisplay from "./components/ArtDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: 1 };
    this.setTab = this.setTab.bind(this);
  }

  setTab(tab) {
    console.log("Called set tab with tab = " + tab);
    this.setState({ tab: tab });
  }

  render() {
    return (
      <div className="App" id="topFlexBox">
        <div id="innhold">
          <div>
            <h1>Kunstoverskrift – Fane {this.state.tab}</h1>
          </div>
          <div>
            <Tabs setTab={this.setTab} />
          </div>
          <div>
            <ArtDisplay />
          </div>
        </div>
        <div>
          <OptionPanel />
        </div>
      </div>
    );
  }
}

export default App;
