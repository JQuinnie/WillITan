import React from 'react';

import { Box, Container } from '@material-ui/core';

import NavBar from './components/NavBar';
import Content from './components/Content';

import './App.css';

const App = () => (
    <Box>
      <div className="App">
        <Container>
          <NavBar />
          <Content />
        </Container>
      </div>
    </Box>
  );

export default App;
