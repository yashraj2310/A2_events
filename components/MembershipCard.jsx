import React from "react";
import "./MembershipCard.css";

const MembershipCard = ({ title, price, description, buttonText, image }) => (
  <div className="membership-card" style={{ backgroundImage: `url(${image})` }}>
    <div className="card-overlay">
      <h3 className="card-title">{title}</h3>
      <h2 className="card-price">{price}</h2>
      <p className="card-description">{description}</p>
      <button className="card-button">{buttonText}</button>
    </div>
  </div>
);

export default MembershipCard;
