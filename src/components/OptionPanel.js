import React, { Component } from "react";
import "../App.css";

class OptionPanel extends Component {
  render() {
    const imageCategories = ["Bilde 1", "Bilde 2", "Bilde 3"];
    const imageItems = imageCategories.map((str, i) => (
      <div className="radio">
        <label>
          <input
            type="radio"
            name="picture"
            onChange={() => {
              this.props.handlePictureChange("option" + (i + 1));
            }}
          />
          {str}
        </label>
      </div>
    ));

    const textCategories = ["Tekst 1", "Tekst 2", "Tekst 3"];
    const textItems = textCategories.map((str, i) => (
      <div className="radio">
        <label>
          <input
            type="radio"
            name="text"
            onChange={() => {
              this.props.handleTextChange("option" + (i + 1));
            }}
          />
          {str}
        </label>
      </div>
    ));

    const musicCategories = ["Musikk 1", "Musikk 2", "Musikk 3"];
    const musicItems = musicCategories.map((str, i) => (
      <div className="radio">
        <label>
          <input
            type="radio"
            name="music"
            onChange={() => {
              this.props.handleMusicChange("option" + (i + 1));
            }}
          />
          {str}
        </label>
      </div>
    ));

    return (
      <div className="Tabs">
        <form>
          <h4 className="optionTitle">Bilde</h4>
          {imageItems}
          <h4 className="optionTitle">Tekst</h4>
          {textItems}
          <h4 className="optionTitle">Musikk</h4>
          {musicItems}
        </form>
      </div>
    );
  }
}

export default OptionPanel;
