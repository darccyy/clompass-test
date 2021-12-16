import { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import "../css/Layout.min.css";

class Layout extends Component {
  render() {
    // Basic layout for all pages
    return (
      <>
        {/* Header text */}
        <header>
          <Link to="/" title="Home Page">
            <h1>Clompass Test</h1>
          </Link>
        </header>

        {/* This is where the rest of the page goes - In index.js */}
        <Outlet />
      </>
    );
  }
}

export default Layout;
