import React, { Component } from "react";
import "./App.css";
import Tabs from "./components/Tabs";
import OptionPanel from "./components/OptionPanel";
import ArtDisplay from "./components/ArtDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg"
    };
  }

  render() {
    return (
      <div className="App" id="topFlexBox">
        <div id="innhold">
          <div>
            <h1>Kunstoverskrift</h1>
          </div>
          <div>
            <Tabs />
          </div>
          <div>
            <ArtDisplay imageUrl={this.state.currentImageUrl} />
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
