import React from 'react'
import './HomePage.css'
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import {IconButton } from '@mui/material';

const HomePage = ({page,DarkMode,handleDarkMode}) => {
  return (
   <div className={DarkMode ? 'darkMode'  : 'lightmode'}>
     <div className='HomePage'>
        <nav>
            <div className="img">
                {
                    DarkMode ?
                    <img src="/image/audio-headset (1).png" alt="" />
                    :
                    <img src="/image/audio-headset (2).png" alt="" />
                }
            </div>
            <h1>Boom Player</h1>
        </nav>
        <main>
            <div className="playlist" onClick={()=>page('addplaylists')}>
                <div className="p-img">
                <PlaylistPlayIcon className={DarkMode ? 'white' : 'black' }/>
                </div>
                <h2>Playlists</h2>
                <div className="forward">
                    <NavigateNextIcon className={DarkMode ? 'white' : 'black' }/>
                </div>
            </div>
            <div className="songs" onClick={()=>page('songs')}>
                <div className="s-img">
                    <MusicNoteIcon className={DarkMode ? 'white' : 'black' }/>
                    </div>
                <h2>Songs</h2>
                <div className="forward">
                    <NavigateNextIcon className={DarkMode ? 'white' : 'black' }/>
                </div>

            </div>
            <div className="modeContainer">
                {
                    DarkMode ?
                    <IconButton onClick={()=>handleDarkMode(false)}>
                        <LightModeIcon className='white'/>
                    </IconButton>
                    :
                    <IconButton onClick={()=>handleDarkMode(true)}>
                        <NightlightIcon className='black'/>
                    </IconButton>

                }
            </div>
        </main>
    </div>
   </div>
  )
}

export default HomePage