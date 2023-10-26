import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Actors, MovieInfo, Movies, NavBar, Profile } from './components';

const App = () => {
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <CssBaseline />
      <NavBar />
      <Box sx={{ flexGrow: '1', p: '2em' }}>
        <Box sx={{ height: '70px' }} />
        <Routes>
          <Route path='/' exact element={<Movies />} />
          <Route path='/movie/:id' exact element={<MovieInfo />} />
          <Route path='/actors/:id' exact element={<Actors />} />
          <Route path='/profile/:id' exact element={<Profile />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
