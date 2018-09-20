import React, { Component } from "react";
import "../App.css";

class OptionPanel extends Component {
  render() {
    const imageItems = this.props.imageCategories.map((str, i) => (
      <div key={i} className="radio">
        <label>
          <input
            type="radio"
            name="picture"
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
