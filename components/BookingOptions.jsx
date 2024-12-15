import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingOptions.css";

const bookingOptions = [
  {
    title: "Book for Concert",
    image: {
      default: "/bookconcert1.jpg",
      portrait: "/bookconcert1_portrait.jpg",
    },
    description:
      "Experience live music and incredible performances. Book a concert experience that you'll never forget!",
  },
  {
    title: "Book for Marriage",
    image: { default: "/marriage1.jpg", portrait: "/marriage1_portrait.jpg" },
    description:
      "Celebrate love in grand style. Make your wedding memorable with our exclusive venue and services.",
  },
  {
    title: "Book for Party",
    image: { default: "/party2.jpg", portrait: "/party1_portrait.jpg" },
    description:
      "Host an unforgettable party with friends and family. Perfect for birthdays, anniversaries, and more.",
  },
  {
    title: "Book a Celebrity",
    image: { default: "/cavill1.jpg", portrait: "/cavill1_portrait.jpg" },
    description:
      "Add star power to your event! Book a celebrity appearance and make your occasion truly special.",
  },
];

const BookingOptions = () => {
  const [activeOption, setActiveOption] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const slideshowInterval = setInterval(() => {
      setActiveOption((prev) => (prev + 1) % bookingOptions.length);
    }, 4000); // Automatically switch slides every 4 seconds

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(slideshowInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOptionClick = (index) => {
    setActiveOption(index);
  };

  const handleButtonClick = () => {
    if (bookingOptions[activeOption].title === "Book for Party") {
      navigate("/events"); // Navigate to the events page
    }else if(bookingOptions[activeOption].title === "Book for Marriage"){
      navigate("/venue"); // Navigate to the marriage booking page
    }else if(bookingOptions[activeOption].title === "Book for Concert"){
      navigate("/hero-section"); // Navigate to the concert booking page
    }
    else {
      alert(`Booking option: ${bookingOptions[activeOption].title}`);
    }
  };

  return (
    <div className="booking-options">
      <div className="main-banner">
        <div
          className="main-banner-image"
          style={{
            backgroundImage: `url(${
              isMobile
                ? bookingOptions[activeOption].image.portrait
                : bookingOptions[activeOption].image.default
            })`,
          }}
        ></div>
        <div className="banner-content">
          <h3 className="banner-title">{bookingOptions[activeOption].title}</h3>
          <p className="banner-info">
            {bookingOptions[activeOption].description}
          </p>
          <button className="banner-button" onClick={handleButtonClick}>
            Book {bookingOptions[activeOption].title.split(" ")[2]}
          </button>
        </div>
        <div className="thumbnail-container">
          {bookingOptions.map((option, index) => (
            <div
              key={index}
              className={`thumbnail ${activeOption === index ? "active" : ""}`}
              style={{
                backgroundImage: `url(${
                  isMobile ? option.image.portrait : option.image.default
                })`,
              }}
              onClick={() => handleOptionClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingOptions;
