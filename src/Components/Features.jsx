import React from "react";
import "./Features.css";

const featuresData = [
  {
    icon: "⚡",
    title: "Fast Performance",
    description: "Experience lightning-fast loading and smooth interaction.",
  },
  {
    icon: "🔒",
    title: "Secure",
    description: "We prioritize your security with top-level protection.",
  },
  {
    icon: "📱",
    title: "Mobile Friendly",
    description: "Fully optimized for all mobile devices and screen sizes.",
  },
  {
    icon: "🎨",
    title: "Modern Design",
    description: "Sleek and clean interface that looks great everywhere.",
  },
  {
    icon: "🛠️",
    title: "Easy Customization",
    description: "Easily customizable components to match your brand.",
  },
  {
    icon: "☁️",
    title: "Cloud Integration",
    description: "Seamless access to your data anytime, anywhere.",
  },
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <h2 className="features-title">Key Features</h2>
      <p className="features-subtitle">What makes Pixora stand out</p>

      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
