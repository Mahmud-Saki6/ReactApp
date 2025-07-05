import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function home() {
  return (
    <div>
      <Header></Header>
      {/* hero section with image and text */}
      <section className="hero">
        <div className="hero-banner ">
          <div className="hero-content container">
            <h1>Welcome to My Website</h1>
            <p>We will learn about React</p>
          </div>
        </div>
      </section>

      {/* Cards with image and texts */}
      <section className="cards">
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
        </div>
        {/* the other half */}
        <div className="card-container2 container">
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
      </section>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default home;
