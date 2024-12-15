

import React from 'react';
import styled from 'styled-components';
import Eventcard from './Eventcard1';

const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const Eventgrid = ({ events }) => {
  return (
    <Grid>
      {events.map((event) => (
        <Eventcard key={event.id} event={event} />
      ))}
    </Grid>
  );
};

export default Eventgrid;
