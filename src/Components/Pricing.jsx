import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <h2 className="pricing-title">Choose Your Plan</h2>
      <p className="pricing-subtitle">Flexible pricing tailored to your needs</p>

      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p className="price">$9<span>/mo</span></p>
          <ul>
            <li>1 Project</li>
            <li>Basic Support</li>
            <li>5GB Storage</li>
          </ul>
<a href="#contact">
  <button className="pricing-btn">Choose Plan</button>
</a>
        </div>

        <div className="pricing-card popular">
          <div className="badge">Most Popular</div>
          <h3>Pro</h3>
          <p className="price">$29<span>/mo</span></p>
          <ul>
            <li>10 Projects</li>
            <li>Priority Support</li>
            <li>50GB Storage</li>
          </ul>
<a href="#contact">
  <button className="pricing-btn">Choose Plan</button>
</a>
        </div>

        <div className="pricing-card">
          <h3>Premium</h3>
          <p className="price">$59<span>/mo</span></p>
          <ul>
            <li>Unlimited Projects</li>
            <li>24/7 Support</li>
            <li>200GB Storage</li>
          </ul>
<a href="#contact">
  <button className="pricing-btn">Choose Plan</button>
</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
