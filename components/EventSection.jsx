import React from "react";
import "./EventSection.css";
import RestaurantCard from "./RestaurantCard";
import VIPMusicCard from "./VIPMusicCard";
import AnnualPartyCard from "./AnnualPartyCard";

const EventSection = () => (
  <div className="event-section">
    <h2 className="section-title">Upcoming Events</h2>
    <div className="card-grid">
      <RestaurantCard />
      <VIPMusicCard/>
      <AnnualPartyCard />
    </div>
  </div>
);

export default EventSection;
