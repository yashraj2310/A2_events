import React from "react";
import { useNavigate } from "react-router-dom";
import "./AnnualPartyCard.css";

const AnnualPartyCard = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/events"); // Navigate to the events page
  };

  return (
    <div className="card annual-party-card">
      <div className="card-content">
        <h3 className="card-title">Annual Party</h3>
        <p className="card-description">Join our annual grand party</p>
        <button className="card-button" onClick={handleButtonClick}>
          RSVP Now
        </button>
      </div>
    </div>
  );
};

export default AnnualPartyCard;
