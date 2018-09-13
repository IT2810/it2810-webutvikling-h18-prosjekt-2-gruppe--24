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
            <ArtDisplay
              imageUrl={this.state.currentImageUrl}
              audioSourceUrl={this.state.currentAudioSourceUrl}
              text={this.state.currentText}
            />
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
