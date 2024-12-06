import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="main-title">
          Welcome to <span className="highlight">ChatUP</span>
        </h1>
        <p className="description">
          The future of social interaction — faster, smarter, and better.
        </p>
        <div className="buttons">
          <button className="cta-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
