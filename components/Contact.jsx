import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Our Location</h2> {/* Changed title to "Our Location" */}
      <p>
        We welcome you to visit our headquarters. Here’s where you can find us:
      </p>
      <div className="map-container">
        <iframe
          title="A2 Events Headquarters"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0361718894175!2d144.9555677157694!3d-37.81747317975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6435b7e23c6c7%3A0x5afedc87256e01d3!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1632998244150!5m2!1sen!2sau"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
