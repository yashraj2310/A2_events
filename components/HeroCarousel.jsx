import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import "./HeroCarousel.css";

const HeroCarousel = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesData = [
    {
      title: "Taylor Swift Brings The Eras Tour to Life!",
      date: "June 15, 2024",
      venue: "Madison Square Garden, New York City",
      time: "7:00 PM",
      ticketsLink: "https://www.ticketmaster.com",
      description:
        "Join Taylor Swift as she celebrates her incredible journey through music. Experience her captivating performances featuring songs from all her albums.",
      image: isMobile ? "/taylor_portrait.jpg" : "/taylor1.jpg",
    },
    {
      title: "Ed Sheeran's Summer Stadium Tour!",
      date: "August 10, 2024",
      venue: "Wembley Stadium, London",
      time: "8:00 PM",
      ticketsLink: "https://www.livenation.com",
      description:
        "Don't miss the chance to see Ed Sheeran live! His intimate acoustic style combined with powerful anthems makes for an unforgettable night.",
      image: isMobile ? "/ed_portrait.jpg" : "/ed.jpg",
    },
    {
      title: "Beyoncé’s Renaissance World Tour!",
      date: "September 5, 2024",
      venue: "Allegiant Stadium, Las Vegas",
      time: "8:30 PM",
      ticketsLink: "https://www.axs.com",
      description:
        "The queen is back! Beyoncé will perform her greatest hits along with new tracks from her latest album. This concert promises stunning visuals and choreography.",
      image: isMobile ? "/beyonce_portrait.png" : "/beyonce1.png",
    },
    {
      title: "Justin Bieber Live in Concert!",
      date: "October 20, 2024",
      venue: "United Center, Chicago",
      time: "7:30 PM",
      ticketsLink: "https://www.stubhub.com",
      description:
        "Join Justin Bieber for a night of unforgettable music and incredible performances. With a mix of pop and R&B, Justin's concerts are known for their energy.",
      image: isMobile ? "/justin_portrait.jpg" : "/justin1.jpg",
    },
    {
      title: "Billie Eilish’s Happier Than Ever Tour!",
      date: "November 12, 2024",
      venue: "The Forum, Los Angeles",
      time: "8:00 PM",
      ticketsLink: "https://www.ticketmaster.com",
      description:
        "Billie Eilish is known for her unique style and powerful lyrics. Experience a night filled with emotional performances and stunning visual artistry.",
      image: isMobile ? "/billie_portrait.jpg" : "/billie1.jpg",
    },
    {
      title: "Ariana Grande Takes the Stage!",
      date: "December 2, 2024",
      venue: "Barclays Center, Brooklyn",
      time: "7:00 PM",
      ticketsLink: "https://www.axs.com",
      description:
        "Ariana Grande will light up the stage with her powerhouse vocals and infectious energy. Fans can expect a concert experience filled with her biggest hits.",
      image: isMobile ? "/ariana_portrait.jpg" : "/ariana1.jpg",
    },
    {
      title: "The Weeknd’s After Hours Tour!",
      date: "January 15, 2025",
      venue: "TD Garden, Boston",
      time: "8:00 PM",
      ticketsLink: "https://www.livenation.com",
      description:
        "Join The Weeknd for a night of sultry beats and unforgettable performances. His unique sound and atmospheric staging will transport you into his music world.",
      image: isMobile ? "/weeknd_portrait.jpg" : "/weeknd1.jpg",
    },
    {
      title: "Bruno Mars Live Concert Experience!",
      date: "February 10, 2025",
      venue: "Toyota Center, Houston",
      time: "8:30 PM",
      ticketsLink: "https://www.ticketmaster.com",
      description:
        "Bruno Mars combines pop, funk, and R&B into a high-energy show that keeps audiences on their feet. Expect a lively atmosphere filled with dancing and sing-alongs.",
      image: isMobile ? "/bruno_portrait.jpg" : "/bruno.jpg",
    },
    {
      title: "Dua Lipa's Future Nostalgia Tour!",
      date: "March 25, 2025",
      venue: "Sydney Opera House, Sydney",
      time: "8:00 PM",
      ticketsLink: "https://www.axs.com",
      description:
        "Dua Lipa is known for her infectious pop hits and incredible stage presence. Her concerts are a perfect blend of catchy tunes and captivating visuals.",
      image: isMobile ? "/dua_portrait.jpg" : "/dua1.jpg",
    },
    {
      title: "Lady Gaga’s Chromatica Ball Tour!",
      date: "April 18, 2025",
      venue: "Wells Fargo Center, Philadelphia",
      time: "8:00 PM",
      ticketsLink: "https://www.stubhub.com",
      description:
        "Lady Gaga’s concerts are known for their theatrical performances and powerful messages. Experience her unique artistry as she brings the Chromatica Ball to life.",
      image: isMobile ? "/gaga_portrait.jpg" : "/gaga.jpg",
    },
  ];

  return (
    <div className="hero-carousel">
      <h2 className="carousel-heading">Concert Pay-Per-View</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{
          delay: 4000, // Set slide transition delay to 4 seconds
          disableOnInteraction: false, // Prevent stopping autoplay on user interaction
        }}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
              />
              <div className="overlay">
                <h3>{slide.title}</h3>
                <p>
                  <strong>Date:</strong> {slide.date}
                </p>
                <p>
                  <strong>Venue:</strong> {slide.venue}
                </p>
                <p>
                  <strong>Time:</strong> {slide.time}
                </p>
                <p>{slide.description}</p>
                <a href={slide.ticketsLink} className="buy-tickets-button">
                  Buy Tickets
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
