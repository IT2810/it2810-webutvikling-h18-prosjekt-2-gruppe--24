import React, { Component } from "react";
import "./App.css";
import Tabs from "./components/Tabs";
import OptionPanel from "./components/OptionPanel";
import ArtDisplay from "./components/ArtDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: Math.floor(4 * Math.random() + 1),
      imageCategories: ["Frukt", "Flagg", "Dyr"],
      textCategories: ["Ettertenkende", "Nasjonalistiske", "Barnslige"],
      musicCategories: ["Jazzy", "Klassiske", "Elektroniske"],
      imageOption: Math.floor(3 * Math.random()),
      textOption: Math.floor(3 * Math.random()),
      musicOption: Math.floor(3 * Math.random()),
      currentImage: "",
      currentAudioSourceUrl: "",
      currentText: ""
    };
    this.setTab = this.setTab.bind(this);
    this.handlePictureChange = this.handlePictureChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleMusicChange = this.handleMusicChange.bind(this);
  }

  componentDidMount() {
    this.setTab(this.state.tab);
  }

  handlePictureChange(value, tab = this.state.tab) {
    if (value === null) {
      return;
    }
    this.setState({ imageOption: value });
    fetch("resources/pictures/" + value + "/" + tab + ".svg") // https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
      .then(response => response.text())
      // .then(str => new window.DOMParser().parseFromString(str, "text/xml"))  // Siden vi bruker `dangerouslySetInnerHTML`, trenger vi ikke å parse til XML
      .then(
        result => {
          // console.log(result);
          this.setState({
            currentImage: result
          });
        },
        error => {
          console.log("Klarte ikke å finne bildet");
        }
      );
    // console.log(this.state);
  }

  handleTextChange(value, tab = this.state.tab) {
    if (value === null) {
      return;
    }
    this.setState({ textOption: value });
    fetch("resources/texts/" + value + "/" + tab + ".json")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            currentText: result.text
          });
        },
        error => {
          console.log("Klarte ikke å finne tekst");
        }
      );

    // console.log(this.state);
  }

  handleMusicChange(value, tab = this.state.tab) {
    if (value === null) {
      return;
    }
    this.setState({ musicOption: value });
    // console.log(this.state);
    let newUrl = "resources/sounds/" + value + "/" + tab + ".mp3";
    this.setState({ currentAudioSourceUrl: newUrl });
  }

  setTab(tab) {
    console.log("Called set tab with tab = " + tab);
    this.setState({ tab: tab });
    this.handlePictureChange(this.state.imageOption, tab);
    this.handleTextChange(this.state.textOption, tab);
    this.handleMusicChange(this.state.musicOption, tab);
  }

  render() {
    return (
      <div className="App" id="topFlexBox">
        <div id="contentSlot">
          <div>
            <h1>
              {this.state.musicCategories[this.state.musicOption]}{" "}
              {this.state.textCategories[this.state.textOption]}{" "}
              {this.state.imageCategories[this.state.imageOption]}{" "}
              {this.state.tab}
            </h1>
          </div>
          <div>
            <Tabs setTab={this.setTab} />
          </div>
          <div>
            <ArtDisplay
              image={this.state.currentImage}
              audioSourceUrl={this.state.currentAudioSourceUrl}
              text={this.state.currentText}
            />
          </div>
        </div>
        <div id="optionPanelSlot">
          <OptionPanel
            imageOption={this.state.imageOption}
            textOption={this.state.textOption}
            musicOption={this.state.musicOption}
            imageCategories={this.state.imageCategories}
            textCategories={this.state.textCategories}
            musicCategories={this.state.musicCategories}
            currentImage={this.state.currentImage}
            currentText={this.state.currentText}
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
