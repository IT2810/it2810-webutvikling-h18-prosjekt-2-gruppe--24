import React, { Component } from "react";
import "../App.css";
import "./Tabs.css";

class Tabs extends Component {
  render() {
    return (
      <div className="Tabs" id="tabBar">
        <button onClick={() => this.props.setTab(1)}>1</button>
        <button onClick={() => this.props.setTab(2)}>2</button>
        <button onClick={() => this.props.setTab(3)}>3</button>
        <button onClick={() => this.props.setTab(4)}>4</button>
      </div>
    );
  }
}

export default Tabs;
