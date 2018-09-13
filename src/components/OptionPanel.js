import React, { Component } from "react";
import "../App.css";

class OptionPanel extends Component {
  render() {
    return (
      <div className="Tabs">
        <p className="placeholder-text">VALGPANEL: </p>
        <form>
          <h4>Bilde</h4>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option1"
                name="picture"
                onChange={() => {
                  this.props.handlePictureChange("option1");
                }}
              />
              Bildetype 1
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option2"
                name="picture"
                onChange={() => {
                  this.props.handlePictureChange("option2");
                }}
              />
              Bildetype 2
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option3"
                name="picture"
                onChange={() => {
                  this.props.handlePictureChange("option3");
                }}
              />
              Bildetype 3
            </label>
          </div>
          <h4>Tekst</h4>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option1"
                name="text"
                onChange={() => {
                  this.props.handleTextChange("option1");
                }}
              />
              Teksttype 1
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option2"
                name="text"
                onChange={() => {
                  this.props.handleTextChange("option2");
                }}
              />
              Teksttype 2
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option3"
                name="text"
                onChange={() => {
                  this.props.handleTextChange("option3");
                }}
              />
              Teksttype 3
            </label>
          </div>
          <h4>Musikk</h4>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option1"
                name="music"
                onChange={() => {
                  this.props.handleMusicChange("option1");
                }}
              />
              Musikktype 1
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option2"
                name="music"
                onChange={() => {
                  this.props.handleMusicChange("option2");
                }}
              />
              Musikktype 2
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option3"
                name="music"
                onChange={() => {
                  this.props.handleMusicChange("option3");
                }}
              />
              Musikktype 3
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default OptionPanel;
