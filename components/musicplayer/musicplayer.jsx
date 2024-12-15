import React from "react";
import styled from "styled-components";
import songsData from "./songsdata"; // Import the songs data
import { useNavigate } from "react-router-dom"; 


const StyledWrapper = styled.div`
  background-color: #000; 
  min-height: 40vh; 
  width: 100%; 
  padding: 20px;

  .cards-container {
    display: flex;
    flex-wrap: nowrap; /* Default: Single row layout */
    gap: 20px;
    justify-content: center; 
    overflow-x: auto;
  }

  .card {
    flex: 0 0 calc((100% - 100px) / 5); /* Default for large screens: 5 cards */
    max-width: calc((100% - 100px) / 5); 
    height: 350px;
    background: #1c1c1e;
    color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    cursor: pointer;
    margin-top: 20px;
    overflow: hidden;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6), 0 0 15px #1db954;
    }
  }

  .card img {
    width: 100%;
    height: 60%; /* Take up 60% of the card height */
    object-fit: cover; /* Ensures the image maintains its aspect ratio and fills the space */
    border-radius: 10px 10px 0 0; /* Rounded corners for the top of the card */
  }

  .content {
    text-align: center;
    padding: 10px;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      color: #a0a0a0;
      margin-bottom: 1rem;
    }

    button {
      text-decoration: none;
      color: #1db954;
      font-weight: bold;
      font-size: 0.9em;
      border: 2px solid #1db954;
      border-radius: 20px;
      padding: 5px 30px;
      transition: all 0.3s ease;
      cursor:pointer;
      &:hover {
        background: #1db954;
        color: #fff;
      }
    }
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .cards-container {
      flex-wrap: wrap; /* Wrap cards into rows */
      justify-content: center; /* Center align cards */
    }

    .card {
      flex: 1 1 100%; /* Full width for each card in a column */
      max-width: 100%; 
    }
  }

  @media (max-width: 576px) {
    .card {
      flex: 1 1 100%; /* Full width for extra small screens */
      max-width: 100%;
    }
  }
`;

const SongCards = () => {
  
  const navigate = useNavigate();

  const handleNavigation = (artist) => {
    navigate("/artist", { state: { artist } }); // Navigate to the ArtistCard route with state
  };
  return (
    <StyledWrapper>
      <div className="cards-container">
        {songsData.map((artist, index) => (
          <div className="card" key={index}>
            <img src={artist.songs[0].image} alt={`${artist.artist} song`} />
            <div className="content">
              <h1>{artist.artist}</h1>
              <button onClick={() => handleNavigation(artist)}>Listen Me!</button>
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default SongCards;
