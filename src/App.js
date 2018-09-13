import React, { Component } from "react";
import "./App.css";
import Tabs from "./components/Tabs";
import OptionPanel from "./components/OptionPanel";
import ArtDisplay from "./components/ArtDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      pictureOption: "",
      textOption: "",
      musicOption: "",
      currentImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
      currentAudioSourceUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/DescenteInfinie.ogg",
      currentText: (
        <p>
          Ja, vi elsker dette landet,
          <br />
          som det stiger frem,
          <br />
          furet, værbitt over vannet,
          <br />
          med de tusen hjem.
          <br />
          Elsker, elsker det og tenker
          <br />
          på vår far og mor
          <br />
          og den saganatt som senker
          <br />
          drømme på vår jord.
        </p>
      )
    };
    this.setTab = this.setTab.bind(this);
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
            <ArtDisplay
              imageUrl={this.state.currentImageUrl}
              audioSourceUrl={this.state.currentAudioSourceUrl}
              text={this.state.currentText}
            />
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
