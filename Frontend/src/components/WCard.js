import React from 'react';
import { Typography } from '@material-ui/core';

const WCard = (props) => {
  return (
    <div>
      <Typography variant="h3" component="h2">
        {props.temp}&deg;
      </Typography>
      <Typography variant="h5" color="textSecondary">
        <span>
          min: {props.min}&deg; max: {props.max}&deg;
        </span>
      </Typography>
      <Typography variant="h4" color="textSecondary">
        {props.description}
      </Typography>
    </div>
  );
};

export default WCard;
