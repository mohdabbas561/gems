import React from "react";
import "./App.css";
import { FaTwitter, FaTelegram } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          $GME<span>STOP</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">NFT</a>
          </li>
          <li>
            <a href="#">Casino</a>
          </li>
          <li>
            <a href="#">Whitepaper</a>
          </li>
        </ul>
        <div className="social-icons">
          <FaTwitter className="icon" />
          <FaTelegram className="icon" />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>
          Wall Street Can't Stop Us <span> Coming on $NEAR</span>
        </h1>
        <button className="join-button">Stay Tuned!</button>
      </header>
    </div>
  );
}

export default App;
