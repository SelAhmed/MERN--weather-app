import React from 'react';

const Location = (props) => {
  return (
    <div>
      <p style={{ fontSize: '2rem' }}>
        {props.city}, {props.country}
      </p>
    </div>
  );
};

export default Location;
