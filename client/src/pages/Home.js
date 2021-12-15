import { Component } from "react";

import "../css/Home.min.css";

class Home extends Component {
  // Initialize state variable
  state = {};

  // Fetch message from server, Add to state
  componentDidMount() {
    fetch("/api/test")
      .then(res => res.json())
      .then(json => this.setState(json));
  }

  render() {
    // Home page
    return (
      <div className="Home">
        <h1>Home Page</h1>

        {/* Display server message */}
        <p class="message">
          <strong>Server Message:</strong>{" "}
          {this.state.message || "Loading message..."}
        </p>
      </div>
    );
  }
}

export default Home;
