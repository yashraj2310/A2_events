import React from "react";
import "./EventCard.css";

const EventCard = ({ title, description }) => (
  <div className="event-card">
    <h3 className="event-title">{title}</h3>
    <p className="event-description">{description}</p>
  </div>
);

export default EventCard;
