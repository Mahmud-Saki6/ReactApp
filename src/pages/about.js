import React from "react";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

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
        {[
          {
            image: "/logo192.png",
            title: "Card Title 1",
            des: "Card description goes here.",
          },
          {
            image: "/logo192.png",
            title: "Card Title 2",
            des: "Card description goes here.",
          },
          {
            image: "/logo192.png",
            title: "Card Title 3",
            des: "Card description goes here.",
          },
          {
            image: "/logo192.png",
            title: "Card Title 4",
            des: "Card description goes here.",
          },
        ].map((item, index) => (
          <Cards
            key={index}
            image={item.image}
            title={item.title}
            description={item.des}
          />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default about;
