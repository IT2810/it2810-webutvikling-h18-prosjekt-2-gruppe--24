import React, { Component } from "react";
import "../App.css";
import "./ArtDisplay.css";

class ArtDisplay extends Component {
  render() {
    return (
      <div id="artDisplayBox" className="ArtDisplay">
        <div id="imageSlot">
          {/* <img src={this.props.image} height="auto" width="100%" alt="Bilde" /> */}
          {/* Setter inn SVG-koden direkte som HTML. Virker usikkert, men er anbefalt av fagstaben */}
          <div dangerouslySetInnerHTML={{ __html: this.props.image }} />
        </div>
        <div id="soundTextBox">
          <div>
            <audio controls>
              <source src={this.props.audioSourceUrl} type="audio/ogg" />
            </audio>
          </div>
          <div id="text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default ArtDisplay;
