import React, { useState, useEffect } from "react";
import "./MembershipPerks.css";

const perksData = [
  "Join A2Events Club! Exclusive Membership for Only ₹1500 - Enroll Today!",
  "Every Weekend Free Entry for Annual Members! Only ₹25000 for a Year of Events!",
  "Special Buffet Offers Every Weekend and Holidays - Satisfy Your Cravings!",
  "Unmatched DJ Experience! Dance to Tunes Like Never Before!",
  "Dress to Impress! Selective Dress Codes for an Elite Party Vibe!",
  "Celebrity Appearances Await! Don’t Miss Out on the Spotlight!",
  "VIP Members Enjoy Free Entry and Exclusive Perks All Year!",
  "Join Us for Party Nights - Food, Fun, and Entertainment!",
  "Reserve Your Spot for Unforgettable Celebrations at A2Events!",
  "Special Discounts on Memberships - Sign Up Now for Exclusive Offers!",
];

const imagePaths = [
  "/premium.jpg",
  "/week.jpg",
  "/buffet.jpg",
  "/djexp.jpg",
  "/fashion.jpg",
  "/carpet.jpg",
  "/lounge.jpg",
  "/food.jpg",
  "/event.jpg",
  "/offer.jpg",
];

const MembershipPerks = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  const updateItemsPerView = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1920) setItemsPerView(4);
    else if (screenWidth >= 1200 && screenWidth < 1920) setItemsPerView(3);
    else if (screenWidth >= 768 && screenWidth < 1200) setItemsPerView(2);
    else setItemsPerView(1);
  };

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const next = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % perksData.length);
  };

  const prev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + perksData.length) % perksData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); // Automatically move right every 5 seconds
    return () => clearInterval(interval); // Clear interval on unmount
  }, [itemsPerView]);

  const displayedItems = [...perksData]
    .slice(startIndex, startIndex + itemsPerView)
    .concat(
      perksData.slice(
        0,
        Math.max(0, startIndex + itemsPerView - perksData.length)
      )
    );

  return (
    <div className="membership-perks-section">
      <h2 className="membership-perks-title">Perks for Members</h2>
      <div className="navigation-container">
        <button className="nav-arrow" onClick={prev}>
          &lt;
        </button>
        <div className="cards-container">
          {displayedItems.map((perk, index) => (
            <div className="perk-card" key={index}>
              <div
                className="card-background"
                style={{
                  backgroundImage: `url(${
                    imagePaths[(startIndex + index) % imagePaths.length]
                  })`,
                }}
              ></div>
              <div className="card-content">
                <p>{perk}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-arrow" onClick={next}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MembershipPerks;
