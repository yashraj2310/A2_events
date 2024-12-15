import React from "react";
import styled from "styled-components";

const ConcertDetailsWrapper = styled.div`
  background: #1c1c1e;
  border-radius: 10px;
  width: 50%; /* Adjust width */
  min-height: 70vh; /* Adjust height */
  padding: 20px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);

  h3 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.8rem; /* Slightly larger text */
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 20px;
      font-size: 1.2rem; /* Larger text for readability */
      line-height: 1.5;

      strong {
        color: #1db954;
      }

      .description {
        margin-top: 5px;
        color: #ccc;
        font-style: italic;
      }

      .youtube-button {
        margin-top: 10px;
        background-color: #1db954;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        font-size: 1rem;

        &:hover {
          background-color: #148c3a;
        }
      }
    }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    width: 90%; /* Adjust width for smaller screens */
    min-height: auto;
    margin-top: 20px; /* Add spacing between stacked sections */
  }
`;

const ConcertDetails = ({ concerts }) => {
  if (!concerts || concerts.length === 0) {
    return (
      <ConcertDetailsWrapper>
        <h3>Upcoming Concerts</h3>
        <p>No concert details available for this artist.</p>
      </ConcertDetailsWrapper>
    );
  }

  return (
    <ConcertDetailsWrapper>
      <h3>Upcoming Concerts</h3>
      <ul>
        {concerts.map((concert, index) => (
          <li key={index}>
            <strong>{concert.location}</strong> - {concert.date} at {concert.time} ({concert.price})
            <p className="description">{concert.description}</p>
            {concert.youtubeURL && (
              <a
                href={concert.youtubeURL}
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-button"
              >
                Watch on YouTube
              </a>
            )}
          </li>
        ))}
      </ul>
    </ConcertDetailsWrapper>
  );
};

export default ConcertDetails;
