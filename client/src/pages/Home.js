import { Component } from "react";

import "../css/Home.min.css";

import Tasks from "../js/Tasks";

class Home extends Component {
  render() {
    // Home page
    return (
      <div className="Home">
        <h1>Home Page</h1>

        {/* Display server message */}
        <Tasks />
      </div>
    );
  }
}

export default Home;
