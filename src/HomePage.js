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
    <div className={DarkMode ? 'HomePageDark'  : 'HomePage'}>
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
                    {
                        DarkMode ?
                        <PlaylistPlayIcon className='white'/>
                        :
                        <PlaylistPlayIcon className='black'/>
                    }
                </div>
                <h2>Playlists</h2>
                <div className="forward">
                    {
                        DarkMode ?
                        <NavigateNextIcon className='white'/>
                        :
                        <NavigateNextIcon className='black'/>
                    }
                    </div>
            </div>
            <div className="songs" onClick={()=>page('songs')}>
                <div className="s-img">
                {
                        DarkMode ?
                        <MusicNoteIcon className='white audio'/>
                        :
                        <MusicNoteIcon className='black audio'/>
                    }
                    </div>
                <h2>Songs</h2>
                <div className="forward">
                    {
                        DarkMode ?
                        <NavigateNextIcon className='white'/>
                        :
                        <NavigateNextIcon className='black'/>
                    }
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
  )
}

export default HomePage