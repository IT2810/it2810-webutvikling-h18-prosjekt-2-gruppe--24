import React, { Component } from "react";
import "../App.css";
// import "./OptionPanel.css";

class OptionPanel extends Component {
  render() {
    const imageItems = this.props.imageCategories.map((str, i) => (
      <div key={i} className="radio">
        <label>
          <input
            type="radio"
            name="picture"
            checked={this.props.pictureOption === i}
            onChange={() => {
              this.props.handlePictureChange(i);
            }}
          />
          {str}
        </label>
      </div>
    ));

    const textItems = this.props.textCategories.map((str, i) => (
      <div key={i} className="radio">
        <label>
          <input
            type="radio"
            name="text"
            checked={this.props.textOption === i}
            onChange={() => {
              this.props.handleTextChange(i);
            }}
          />
          {str}
        </label>
      </div>
    ));

    const musicItems = this.props.musicCategories.map((str, i) => (
      <div key={i} className="radio">
        <label>
          <input
            type="radio"
            name="music"
            checked={this.props.musicOption === i}
            onChange={() => {
              this.props.handleMusicChange(i);
            }}
          />
          {str}
        </label>
      </div>
    ));

    return (
      <div className="Tabs">
        <form>
          <h4 className="optionTitle">Musikk</h4>
          {musicItems}
          <h4 className="optionTitle">Tekst</h4>
          {textItems}
          <h4 className="optionTitle">Bilde</h4>
          {imageItems}
        </form>
      </div>
    );
  }
}

export default OptionPanel;
