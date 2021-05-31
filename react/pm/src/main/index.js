import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
class MainPage extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/upload">
              <p>식단</p>
            </Link>
          </li>
          <li>
            <a href="1.html">식단기록</a>
          </li>
          <li>
            <a href="1.html">룰렛</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MainPage;
