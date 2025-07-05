import React from "react";
import Headers from "../components/Header";
import Footer from "../components/Footer";

function contact() {
  return (
    <div>
      <Headers></Headers>
      <section className="contact-banner">
        <div className="contact-overlay">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="contact-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default contact;
