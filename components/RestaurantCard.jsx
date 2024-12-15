import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = () => (
  <div className="card restaurant-card">
    <div className="card-content">
      <h3 className="card-title">Restaurant</h3>
      <p className="card-description">Exclusive access to fine dining</p>
      <button className="card-button">Book Now</button>
    </div>
  </div>
);

export default RestaurantCard;
