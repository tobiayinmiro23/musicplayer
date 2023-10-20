import './App.css';
import React, { useEffect, useState } from 'react'
import HomePage from './HomePage';
import AddPlayList from './AddPlayList';
import Playlists from './Playlists';
import Search from './Search';
import Songs from './Songs';
import NowPlaying from './NowPlaying';
import NewPlaylist from './NewPlaylist';
import { allSongs } from './AllSongsDb';


function App() {
  const [nowPlaying, setnowPlaying] = useState({})
  const [page, setpage] = useState('home')
  const [DarkMode, setDarkMode] = useState(false)
  const [playnext, setplaynext] = useState([])
  const [playlists, setplaylists] = useState([])
  const [currentPlaylist, setcurrentPlaylist] = useState('')
  const [songs, setsongs] = useState(allSongs)

  useEffect(()=>{
    let allPlaylists= sessionStorage.getItem('playlistNames')
    if(allPlaylists?.length=== undefined){
        sessionStorage.setItem('playlistNames',JSON.stringify([]))
    }
  },[])

 

  // function to add to playnext
  const handlePlayNext = (info) => {
    setplaynext(info)
  }
  // function to get currently playing song
  const handleNowPlaying = (info) => {
    setnowPlaying(info)
  }
  // function to get all the songs
  const handleAllSongs = (info) => {
    setsongs(info)
  }
  // function to switch dark mode on and off
  const handleDarkMode = (info) => {
    setDarkMode(info)
  }
  // function to change the components being rendered
  const handlePage = (info) => {
    setpage(info)
  }
  // function for getting the names of playlists 
  const handlePlaylist = (info) => {
    setplaylists(info)
  }
  // function for getting the names of a specificplaylists 
  const getCurrentPlaylist = (info) => {
    setcurrentPlaylist(info)
  }
  return (
    <div className="App">
      <div className={DarkMode ? "containerDark" : "container"}>
        {page === 'home' && <HomePage page={handlePage} DarkMode={DarkMode} handleDarkMode={handleDarkMode} />}
        {page === 'songs' && <Songs page={handlePage} playnext={playnext} handlePlayNext={handlePlayNext} handleAllSongs={handleAllSongs} songsdb={songs} DarkMode={DarkMode} nowPlaying={handleNowPlaying} playlists={playlists} />}
        {page === 'addplaylists' && <AddPlayList getCurrentPlaylist={getCurrentPlaylist} page={handlePage} DarkMode={DarkMode} playlists={playlists} />}
        {page === 'playlist' && <Playlists page={handlePage} DarkMode={DarkMode} currentPlaylist={currentPlaylist} playlists={playlists} />}
        {page === 'newPlaylist' && <NewPlaylist page={handlePage} DarkMode={DarkMode} handlePlaylist={handlePlaylist} />}
        {page === 'search' && <Search nowPlaying={handleNowPlaying} songsdb={songs} page={handlePage} DarkMode={DarkMode} />}
        {page === 'nowPlaying' && <NowPlaying page={handlePage} songs={songs} DarkMode={DarkMode} HandleNowPlaying={handleNowPlaying}  handleAllSongs={handleAllSongs} musicInfo={nowPlaying} playlists={playlists}/>}
      </div>
    </div>
  );
}

export default App;
