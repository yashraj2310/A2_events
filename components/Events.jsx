
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterPanel1 from "./FilterPanel1";
import eventsData1 from "./eventsData1";
import Eventgrid from "./Eventgrid1";
// import CardDetail from '../../components/events/CardDetail'

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  background: #121212;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  
  /* Optional: Add a darker overlay to enhance visibility of text or content */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); /* Dark overlay */
    z-index: 1; /* Ensure the overlay is above the background image */
  }
  
  /* Optional: Add a blur effect */
  img {
    filter: blur(5px);
    transition: all 0.3s ease;
  }
`;

const Heading = styled.h2`
  font-size: 38px;
  // text-decoration: underline;
  text-align: center;
  color: #fff;
  background: #121212;
  padding: 20px 0;
  position: relative; /* Ensure heading stays above image overlay */
  z-index: 2; /* Make sure the heading is above the overlay */
`;

const Event = () => {
  const [filters, setFilters] = useState({
    category: [],
    language: [],
    date: [],
    dateRange: false,
    priceMin: '',
    priceMax: '',
  });

  const image = 'https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D'; 


  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      if (type === 'dateRange') {
        newFilters[type] = value;
      } else if (Array.isArray(newFilters[type])) {
        
        if (newFilters[type]?.includes(value)) {
          newFilters[type] = newFilters[type].filter((item) => item !== value);
        } else {
          newFilters[type] = [...(newFilters[type] || []), value];
        }
      } else {
       
        newFilters[type] = value;
      }
      return newFilters;
    });
  };

  
  const handleClearFilters = () => {
    setFilters({
      category: [],
      language: [],
      date: [],
      dateRange: false,
      priceMin: '',
      priceMax: '',
    });
  };

 
  const filteredEvents = eventsData1.filter((event) => {
    const matchesCategory =
      filters.category.length === 0 || filters.category.includes(event.category);
    const matchesLanguage =
      filters.language.length === 0 || filters.language.includes(event.language);
    const matchesDate = filters.date.length === 0 || filters.date.includes(event.date);
    const matchesPrice =
      (filters.priceMin ? event.price >= filters.priceMin : true) &&
      (filters.priceMax ? event.price <= filters.priceMax : true);

    return matchesCategory && matchesLanguage && matchesDate && matchesPrice;
  });

  return (
    <div>
      
      <ImageContainer image={image} />

      
      <Heading> Events </Heading>

      <EventContainer>
        <FilterPanel1
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
        />
        <Eventgrid events={filteredEvents} />
      </EventContainer>
    </div>
  );
};

export default Event;
