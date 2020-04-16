import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Box>
      <div className="App">
        <Container>
          <h2>Will I Tan?</h2>
          <FormControl className={classes.formControl}>
            <InputLabel>Select Type</InputLabel>
            <Select>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Container>
      </div>
    </Box>
  );
};

export default App;
