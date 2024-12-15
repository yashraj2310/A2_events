import React from "react";
import "./MembershipSection.css";
import MembershipCard from "./MembershipCard";

const MembershipSection = () => (
  <div className="membership-section">
    <h2 className="membership-section-title">Membership Plans</h2>
    <div className="card-grid">
      <MembershipCard
        title="RJ3"
        price="₹25,000"
        description="Exclusive benefits for RJ3 members"
        buttonText="Learn More"
        image="/rj3.jpg"
      />
      <MembershipCard
        title="VIP"
        price="₹29,000"
        description="Get VIP access to all events"
        buttonText="Learn More"
        image="/vip-image.avif"
      />
      <MembershipCard
        title="Standard"
        price="₹2,000"
        description="Standard membership plan"
        buttonText="Learn More"
        image="/standard.jpg"
      />
    </div>
  </div>
);

export default MembershipSection;
