import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section
      ref={sectionRef}
      className={`contact-section ${visible ? "visible" : ""}`}
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-content">
        <div className="contact-info">
          <h2 id="contact-title" className="contact-title">Get in Touch</h2>
          <p className="contact-text">
            We’d love to hear your feedback, inquiries, or just say hello.
            Whether you're curious about features, pricing, demo, or support we’re here to help!
          </p>
          <div className="contact-details">
            <p><strong>📍 Address:</strong> Toronto, Ontario, Canada</p>
            <p><strong>📧 Email:</strong> contact@pixoraapp.com</p>
            <p><strong>📞 Phone:</strong> +1 (437) 555-1212</p>
            <p><strong>⏰ Hours:</strong> Mon–Fri, 9 AM – 5 PM (EST)</p>
            <p><strong>🌐 Website:</strong> www.pixoraapp.com</p>
          </div>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">Facebook</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon youtube">YouTube</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />

          <label htmlFor="phone">Phone (Optional)</label>
          <input type="tel" id="phone" placeholder="Your Phone Number" />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="Subject" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Type your message..." rows="6" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
