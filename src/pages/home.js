import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

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
            {
              image: "/logo192.png",
              title: "Card Title 5",
              des: "Card description goes here.",
            },
            {
              image: "/logo192.png",
              title: "Card Title 6",
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
        {/* the other half */}
      </section>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default home;
