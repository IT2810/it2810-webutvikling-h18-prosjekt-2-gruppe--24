import React, { Component } from "react";
import "../App.css";
import "./ArtDisplay.css";

class ArtDisplay extends Component {
  render() {
    // Ikke lage en lydavspiller med mindre der er lyd å spille av.
    let audioPlayer = null;
    if (this.props.audioSourceUrl !== "") {
      audioPlayer = (
        <audio src={this.props.audioSourceUrl} type="audio/mpeg" controls />
      );
    }

    return (
      <div id="artDisplayBox" className="ArtDisplay">
        <div id="imageSlot">
          {/* Setter inn SVG-koden direkte som HTML. Virker usikkert, men er anbefalt av fagstaben. */}
          <div dangerouslySetInnerHTML={{ __html: this.props.image }} />
        </div>
        <div id="soundTextBox">
          <div>{audioPlayer}</div>
          <div id="text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default ArtDisplay;
