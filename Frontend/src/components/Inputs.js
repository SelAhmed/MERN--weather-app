import React from 'react';
import { TextField, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '14ch',
    },
  },
}));

const Inputs = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} noValidate autoComplete="off">
      <TextField onChange={props.handleChange('city')} label="City" />
      <TextField onChange={props.handleChange('country')} label="Country" />
      <Button onClick={props.loadWeather} variant="contained" color="primary">
        Get Weather
      </Button>
    </Box>
  );
};

export default Inputs;
