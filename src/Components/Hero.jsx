import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="headline">Introducing <span>Pixora 🔮</span></h1>
          <p className="subtext">
            Revolutionizing how you experience design and interaction.
          </p>
          <div className="hero-buttons">
            <button
              className="btn primary"
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </button>
<a href="#demo">
  <button className="btn secondary">Watch Demo</button>
</a>
          </div>
        </div>

        <div className="hero-image">
          <video
            src="/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          />
        </div>
      </div>

      <div className="scroll-indicator">↓</div>
    </section>
  );
};

export default Hero;
