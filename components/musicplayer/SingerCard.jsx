import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ConcertDetails from "./ConcertDetails";

const ArtistCardWrapper = styled.div`
  background-color: #000;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around; /* Adjust spacing between cards */
  padding: 20px;

  /* Responsive design */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack cards on smaller screens */
    align-items: center; /* Center align items */
  }
`;

const ArtistCardSection = styled.div`
  background: #1c1c1e;
  border-radius: 10px;
  width: 40%; /* Increase width */
  min-height: 70vh; /* Increase height */
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 60%; /* Adjust image height */
    border-radius: 10px;
    object-fit: cover;
  }

  h2,
  p {
    margin-top: 10px;
  }

  button {
    background: #1db954;
    color: white;
    border: none;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: auto;

    &:hover {
      background: #148c3a;
    }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    width: 90%; /* Adjust width for smaller screens */
    min-height: auto;
  }
`;

const ArtistCard = () => {
  const location = useLocation();
  const artist = location.state?.artist;

  if (!artist) {
    return (
      <p style={{ color: "white", textAlign: "center" }}>
        No artist data available
      </p>
    );
  }

  return (
    <ArtistCardWrapper>
      <ArtistCardSection>
        <img src={artist.songs[0].image} alt={artist.artist} />
        <h2>{artist.artist}</h2>
        <p>Genre: {artist.genre}</p>
        <button onClick={() => alert(`No tickets available for ${artist.artist}`)}>
          Book Tickets
        </button>
      </ArtistCardSection>
      <ConcertDetails concerts={artist.concerts} />
    </ArtistCardWrapper>
  );
};

export default ArtistCard;
