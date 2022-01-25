import React from 'react';
import Alert from '@material-ui/lab/Alert';

const Error = () => {
  return (
    <div>
      <Alert severity="warning">Please enter valid city and country!</Alert>
    </div>
  );
};

export default Error;
