import React, { useEffect, useRef, useState } from "react";
import "./TryNow.css";

const TryNow = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTryNowClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={`try-now-section ${visible ? "visible" : ""}`}
      ref={sectionRef}
      id="try-now"
      aria-label="Try Pixora now"
    >
      <div className="floating-shapes" aria-hidden="true">
        <span className="shape"></span>
        <span className="shape"></span>
        <span className="shape"></span>
        <span className="shape"></span>
        <span className="shape"></span>
        <span className="shape"></span>
        <span className="shape"></span>
        <span className="shape"></span>
        <span className="shape"></span>
        <span className="shape"></span>
      </div>

      <div className="try-now-content">
        <h2 className="try-now-title">Ready to Experience Pixora?</h2>
        <p className="try-now-sub">
          No credit card required. Instant access to everything.
        </p>

        <ul className="try-now-benefits">
          <li>🚀 Get started in under 60 seconds</li>
          <li>💡 Access AI-powered features instantly</li>
          <li>🔒 Safe, secure, and fully private usage</li>
          <li>📱 Fully mobile responsive experience</li>
          <li>🛠 24/7 support and onboarding guidance</li>
        </ul>

        <button className="try-now-btn" onClick={handleTryNowClick}>
          Try Now — It’s Free
        </button>

        <div className="extra-info">
          <p className="try-now-note">
            Already a user? <a href="#contact">Reach out to upgrade</a> or ask questions.
          </p>
          <p className="try-now-disclaimer">
            *Trial lasts 14 days. Cancel anytime. No automatic charges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TryNow;
