import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HamburgerMenu from "../components/HamburgerMenu";
import BookingOptions from "../components/BookingOptions";
import EventSection from "../components/EventSection";
import HeroCarousel from "../components/HeroCarousel";
import MembershipPerks from "../components/MembershipPerks";
import MembershipSection from "../components/MembershipSection";
import Footer2 from "../components/Footer2";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "../components/Events";
import Venue from "../components/Venue";
import Herosection from "../components/landing page/herosection";
import ArtistCard from "../components/musicplayer/SingerCard";


const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="app-container">
        {isMobile ? <HamburgerMenu /> : <Navbar />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BookingOptions />
                <EventSection />
                <HeroCarousel />
                <MembershipPerks />
                <div className="main-content">
                  <MembershipSection />
                </div>
              </>
            }
          />
          <Route path="/events" element={<Event />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/hero-section" element={<Herosection />} />
          <Route path="/artist" element={<ArtistCard />} />
        </Routes>
        <Footer2 />
      </div>
    </Router>
  );
};

export default App;
