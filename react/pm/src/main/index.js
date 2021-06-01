import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../images/diet.jpg";
import "./index.css";

class MainPage extends Component {
  render() {
    return (
      <div>
        <img id="image" src={image} alt="메인이미지" />
      </div>
    );
  }
}

export default MainPage;
