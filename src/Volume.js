import * as React from 'react';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './NowPlaying.css'

export  function Volume() {
  return (
    // <Box width={460}>
    <Box width={1390}>
      <Slider
        size="small"
      className='vol'
        defaultValue={70}
        secondary= 'teal'
        aria-label="Small"
      />
    </Box>
  );
}
