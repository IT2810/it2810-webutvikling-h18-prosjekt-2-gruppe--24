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
          <div>
            <audio controls>
              <source src={this.props.audioSourceUrl} type="audio/ogg" />
            </audio>
          </div>
          <div>{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default ArtDisplay;
