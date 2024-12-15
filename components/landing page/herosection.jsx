import React, { useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { gsap } from "gsap";
import SongCards from "../musicplayer/musicplayer";



const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    color: white;
  }
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  margin: 10px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/dj-system.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.6;
    z-index: -1;
    border-radius: 30px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledWrapper = styled.div`
  button {
    border: none;
    width: 140px;
    height: 50px;
    color: #fff;
    z-index: 1;
    display: flex;
    background: #000;
    position: relative;
    cursor: pointer;

    &:hover {
      
      color: white;
    }
  }
  button p {
    margin: 0 auto;
    align-self: center;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
  }

  button::after {
    position: absolute;
    content: "";
    width: 100%;
    z-index: -1;
    height: 10%;
    bottom: 0;
    clip-path: polygon(
      0% 74%,
      4% 75%,
      8% 76%,
      11% 77%,
      15% 78%,
      20% 78%,
      25% 77%,
      32% 77%,
      37% 75%,
      40% 74%,
      43% 74%,
      46% 73%,
      52% 72%,
      57% 72%,
      65% 74%,
      66% 75%,
      71% 78%,
      75% 82%,
      81% 86%,
      83% 88%,
      88% 91%,
      90% 94%,
      94% 96%,
      98% 98%,
      100% 100%,
      82% 100%,
      0 100%
    );
    background: #8792eb;
    transition: 0.2s ease;
  }

  button::before {
    position: absolute;
    content: "";
    transform: rotate(180deg);
    width: 100%;
    height: 10%;
    transition: 0.2s ease;
    z-index: -1;
    clip-path: polygon(
      0% 74%,
      4% 75%,
      8% 76%,
      11% 77%,
      15% 78%,
      20% 78%,
      25% 77%,
      32% 77%,
      37% 75%,
      40% 74%,
      43% 74%,
      46% 73%,
      52% 72%,
      57% 72%,
      65% 74%,
      66% 75%,
      71% 78%,
      75% 82%,
      81% 86%,
      83% 88%,
      88% 91%,
      90% 94%,
      94% 96%,
      98% 98%,
      100% 100%,
      82% 100%,
      0 100%
    );
    background: #8792eb;
  }

  button:hover::after {
    clip-path: polygon(
      0 30%,
      9% 34%,
      7% 39%,
      11% 43%,
      13% 33%,
      17% 30%,
      24% 34%,
      25% 35%,
      30% 31%,
      30% 38%,
      39% 33%,
      35% 43%,
      43% 45%,
      55% 46%,
      65% 74%,
      67% 66%,
      81% 57%,
      75% 82%,
      81% 86%,
      83% 88%,
      88% 91%,
      90% 94%,
      94% 96%,
      98% 98%,
      100% 100%,
      82% 100%,
      0 100%
    );
    height: 80%;
  }

  button:hover::before {
    clip-path: polygon(
      0 30%,
      9% 34%,
      7% 39%,
      11% 43%,
      13% 33%,
      17% 30%,
      24% 34%,
      25% 35%,
      30% 31%,
      30% 38%,
      39% 33%,
      35% 43%,
      43% 45%,
      55% 46%,
      65% 74%,
      67% 66%,
      81% 57%,
      75% 82%,
      81% 86%,
      83% 88%,
      88% 91%,
      90% 94%,
      94% 96%,
      98% 98%,
      100% 100%,
      82% 100%,
      0 100%
    );
    height: 80%;
  }
;
  button p {
    margin: 0 auto;
    align-self: center;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #e0e0e0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

const MusicPlayerSection = styled.div`
  margin: 20px;
`;
const Footer = styled.footer`
  background-color: #1c1c1e;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 1rem;

 
`;

const Herosection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const musicPlayerRef = useRef(null);


  useEffect(() => {
    // Animate Title
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    // Animate Subtitle
    gsap.fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1 }
    );
  }, []);

  const handleExploreClick = () => {
    if (musicPlayerRef.current) {
      musicPlayerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <GlobalStyle />
      <HeroSection>
        <Title ref={titleRef}>Welcome to A2_Events MusicHub</Title>
        <Subtitle ref={subtitleRef}>Your ultimate music library awaits</Subtitle>
        <StyledWrapper>
          <button onClick={handleExploreClick}>
            <p>Explore Us!</p>
          </button>
        </StyledWrapper>
      </HeroSection>
      <h1 style={{ textAlign: "center",padding:"40px",fontWeight:"bold",fontSize:"50px" }}>Listen to our artists!</h1>
     

      <MusicPlayerSection ref={musicPlayerRef}>
        <SongCards/>
     
      </MusicPlayerSection>
      
    </>
  );
};

export default Herosection;
