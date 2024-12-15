import React from "react";
import styled from "styled-components";
import songsData from "./songsdata"; // Import the songs data

const StyledWrapper = styled.div`
  background-color: #000;
  min-height: 100vh;
  width: 100%;
  padding: 20px;

  .cards-container {
    display: flex;
    flex-wrap: wrap; /* Allow wrapping for responsiveness */
    gap: 20px;
    justify-content: center;
  }

  .card {
    flex: 0 0 calc((100% - 100px) / 5); /* Default for large screens: 5 cards */
    max-width: calc((100% - 100px) / 5);
    height: 400px; /* Ensure all cards are of the same height */
    background: #1c1c1e;
    color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; /* Ensure content is spaced evenly */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    height: 40%; /* Ensure content takes up the remaining 40% */
    text-align: center;

    h1 {
      font-size: 1.2rem;
      margin: 0.5rem 0;
    }

    h3 {
      font-size: 1rem;
      margin: 0.2rem 0;
    }

    button {
      background: #1db954;
      color: #fff;
      border: none;
      padding: 10px 15px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s ease;

      &:hover {
        background: #148c3a;
        transform: scale(1.05);
      }
    }
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .card {
      flex: 1 1 45%; /* Two cards per row */
      max-width: 45%;
    }
  }

  @media (max-width: 576px) {
    .card {
      flex: 1 1 100%; /* Full width for small screens */
      max-width: 100%;
    }
  }
`;

const Details = () => {
    const handleBookShow = (artist) => {
        alert(`No show right now for ${artist}`);
      };
  return (
    <StyledWrapper>
      <div className="cards-container">
        {songsData.map((artist, index) => (
          <div className="card" key={index}>
            <img src={artist.songs[0].image} alt={`${artist.artist} song`} />
            <div className="content">
              <h1>{artist.artist}</h1>
              <h3>{artist.details[0].timelimit}</h3>
              <h3>{artist.details[0].price}</h3>
              <button onClick={() => handleBookShow(artist.artist)}>Book My Show</button>
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default Details;
