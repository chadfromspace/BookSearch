import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  state = {};

  componentDidMount() {
  }

  render() {
    return (
      <div>
          <navbar className="nav">
              <h4 className="mr-4 brand">
              Google Books
              </h4>
              <div className="search">Search</div>
              <div className="saved">Saved</div>
          </navbar>
      </div>
    );
  }
}

export default Navbar;