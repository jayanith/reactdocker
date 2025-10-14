import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="logo">My Simple Page</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="content">
        <h2>Meet Our Team</h2>
        <div className="card">
          <h3>Jayanith Chowdhary</h3>
          <p>A passionate student exploring AI, full-stack development, and entrepreneurship.</p>
        </div>
       
      </section>
    </div>
  );
}

export default App;
