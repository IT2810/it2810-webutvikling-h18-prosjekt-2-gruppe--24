import React, { Component } from "react";
import "./App.css";
import Tabs from "./components/Tabs";
import OptionPanel from "./components/OptionPanel";
import ArtDisplay from "./components/ArtDisplay";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pictureOption: "",
      textOption: "",
      musicOption: ""
    };
    this.handlePictureChange = this.handlePictureChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleMusicChange = this.handleMusicChange.bind(this);
  }

  handlePictureChange(value) {
    this.setState({ pictureOption: value });
    console.log(this.state);
  }

  handleTextChange(value) {
    this.setState({ textOption: value });
    console.log(this.state);
  }

  handleMusicChange(value) {
    this.setState({ musicOption: value });
    console.log(this.state);
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
            <ArtDisplay />
          </div>
        </div>
        <div>
          <OptionPanel
            handlePictureChange={this.handlePictureChange}
            handleTextChange={this.handleTextChange}
            handleMusicChange={this.handleMusicChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
