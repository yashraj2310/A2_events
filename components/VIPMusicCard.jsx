import React from "react";
import "./VIPMusicCard.css";
import { useNavigate } from "react-router-dom";

const VIPMusicCard = () => {
   const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate("/hero-section"); // Navigate to the events page
    };
  return(

  <div className="card vip-music-card">
    <div className="card-content">
      <h3 className="card-title">VIP Music</h3>
      <p className="card-description">Enjoy VIP music experiences</p>
      <button className="card-button" onClick={handleButtonClick} >Join Now</button>
    </div>
  </div>
  );
};

export default VIPMusicCard;
