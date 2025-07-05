import React from "react";
import Headers from "../components/Header";
import Footer from "../components/Footer";

function about() {
  return (
    <div>
      <Headers></Headers>
      <section className="about-section">
        <div className="about-image">
          <img src="/about.png" alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are a team of passionate developers, designers, and thinkers
            building amazing digital experiences. Our mission is to deliver
            value through creativity and technology.
          </p>
          <button className="about-button">Learn More</button>
        </div>
      </section>
      <div className="card-container1 container">
        <div className="card">
          <img src="/logo192.png" alt="Card Image" />
          <h2>Card Title</h2>
          <p>Card description goes here.</p>
        </div>
        <div className="card">
          <img src="/logo192.png" alt="Card Image" />
          <h2>Card Title</h2>
          <p>Card description goes here.</p>
        </div>
        <div className="card">
          <img src="/logo192.png" alt="Card Image" />
          <h2>Card Title</h2>
          <p>Card description goes here.</p>
        </div>
        <div className="card">
          <img src="/logo192.png" alt="Card Image" />
          <h2>Card Title</h2>
          <p>Card description goes here.</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default about;
