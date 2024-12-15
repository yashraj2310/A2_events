import React, { useEffect, useRef } from "react";
import "./HeaderSection.css";
import { gsap } from "gsap";

const HeaderSection = () => {
  const subtitleRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the logo and subtitle
    gsap.fromTo(
      ".header-logo",
      { y: 50, opacity: 0 }, // Start below and transparent
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" } // Slide in and become visible
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 }, // Start below and transparent
      { y: 0, opacity: 1, duration: 1.5, delay: 0.5, ease: "power3.out" } // Slide in with a slight delay
    );
  }, []);

  return (
    <div className="header-container">
      <div className="header-content cssanimation leBlurIn sequence ">
        <img src="/logo1.png" alt="A2 Events Logo" className="header-logo" />
        <p className="header-subtitle" ref={subtitleRef}>
          Membership page for exclusive access to events
        </p>
      </div>
    </div>
  );
};

export default HeaderSection;
