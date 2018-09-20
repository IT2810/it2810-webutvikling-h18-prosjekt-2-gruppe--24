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
      imageCategories: ["Bilde 1", "Bilde 2", "Bilde 3"],
      textCategories: ["Tekst 1", "Tekst 2", "Tekst 3"],
      musicCategories: ["Musikk 1", "Musikk 2", "Musikk 3"],
      pictureOption: 0,
      textOption: 0,
      musicOption: 0,
      //       currentImageUrl:
      // -        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
      currentImage: "",
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

    fetch("resources/picture" + value + "-fane" + this.state.tab + ".svg") // https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
      .then(response => response.text())
      // .then(str => new window.DOMParser().parseFromString(str, "text/xml"))  // Siden vi bruker `dangerouslySetInnerHTML`, trenger vi ikke å parse til XML
      .then(
        result => {
          console.log(result);
          this.setState({
            currentImage: result
          });
        },
        error => {
          console.log("Klarte ikke å finne bildet");
        }
      );

    console.log(this.state);
  }

  handleTextChange(value) {
    this.setState({ textOption: value });

    fetch("resources/tekst" + value + "-fane" + this.state.tab + ".json")
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
              image={this.state.currentImage}
              audioSourceUrl={this.state.currentAudioSourceUrl}
              text={this.state.currentText}
            />
          </div>
        </div>
        <div>
          <OptionPanel
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
