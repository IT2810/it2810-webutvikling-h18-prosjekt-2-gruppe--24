import React, { Component } from "react";
import "../App.css";
import "./ArtDisplay.css";

class ArtDisplay extends Component {
  render() {
    return (
      <div id="artDisplayBox" className="ArtDisplay">
        <div id="imageSlot">
          <img
            src={this.props.imageUrl}
            height="auto"
            width="100%"
            alt="Bilde"
          />
        </div>
        <div id="soundTextBox">
          <div>Lydavspiller</div>
          <div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default ArtDisplay;
