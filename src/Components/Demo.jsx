import React from "react";
import "./Demo.css";

const Demo = () => {
  return (
    <section id="demo" className="demo-section">
      <div className="demo-content">
        <h2 className="demo-heading">Experience Pixora in Action</h2>
        <p className="demo-description">
          Watch how Pixora brings your digital ideas to life with sleek design and smooth performance.
        </p>

        <div className="video-wrapper">
          <video
            src="/demo.mp4"
            controls
            autoPlay
            muted
            loop
            className="demo-video"
          />
        </div>

      </div>
    </section>
  );
};

export default Demo;
