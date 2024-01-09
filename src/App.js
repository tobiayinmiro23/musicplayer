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
  const [isPlaying, setisPlaying] = useState(true)
  const [currentPlaylist, setcurrentPlaylist] = useState('')
  const [fisrtPlayListSongId, setfirstPlayListSongId] = useState()
  const [songs, setsongs] = useState(allSongs)
  const [audiosCurrentTime, setaudiosCurrentTime] = useState(0)
  const [from, setfrom] = useState('')
  const [playnextOn, setplaynextOn] = useState(false)
  const [playNextSongIndex, setplayNextSongIndex] = useState(1)
  const [shuffleOn, setshuffleOn] = useState(false)
  const [repeatOn, setrepeatOn] = useState(false)
  const [plaiyingSongIdBeforePlaynext, setplaiyingSongIdBeforePlaynext] = useState(0)
  
  // the code below is to create an array for storing all the playlist names in thee session storage
  useEffect(()=>{
    let allPlaylists= sessionStorage.getItem('playlistNames')
    if(allPlaylists?.length=== undefined){
        sessionStorage.setItem('playlistNames',JSON.stringify([]))
    }
  },[])
      //function for the play button 
      const playButton=()=>{
        let audio=document.querySelector('.audio')
        audio.play()
        setisPlaying(true)
      }
      //function for the pause button 
      const pauseButton=()=>{
        let audio=document.querySelector('.audio')
        audio.pause()
        setisPlaying(false)

      }
      //function for the repeat on button 
      const repeatOnButton=()=>{
        let audio=document.querySelector('.audio')
        audio.loop=true
        setrepeatOn(true)
        setshuffleOn(false)
    }
    //function for the repeat of button 
    const repeatOfButton=()=>{
        let audio=document.querySelector('.audio')
        audio.loop=false
        setrepeatOn(false)
    }
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
  // function for getting the names of a specificplaylists 
  const getCurrentPlaylist = (info) => {
    setcurrentPlaylist(info)
  }
  // function for getting the current time of the audio being played 
  const handleAudiosCurrentTime = (info) => {
    setaudiosCurrentTime(info)
  }
  // to correctly take the user back to the page they're coming from
  const handleFrom=(param)=>{
    setfrom(param)
  }
  return (
    <div className="App">
      <div className={DarkMode ? "containerDark" : "container"}>
        {page === 'home' && <HomePage page={handlePage} DarkMode={DarkMode} handleDarkMode={handleDarkMode} />}
        {page === 'songs' && <Songs isPlaying={isPlaying} setisPlaying={setisPlaying} playButton={playButton} pauseButton={pauseButton} playnextOn={playnextOn} plaiyingSongIdBeforePlaynext={plaiyingSongIdBeforePlaynext} setplaiyingSongIdBeforePlaynext={setplaiyingSongIdBeforePlaynext} repeatOnButton={repeatOnButton} repeatOfButton={repeatOfButton} shuffleOn={shuffleOn} setshuffleOn={setshuffleOn} repeatOn={repeatOn} setrepeatOn={setrepeatOn} setplaynextOn={setplaynextOn} page={handlePage} setplayNextSongIndex={setplayNextSongIndex} playNextSongIndex={playNextSongIndex} handleFrom={handleFrom} handleAudiosCurrentTime={handleAudiosCurrentTime} setfirstPlayListSongId={setfirstPlayListSongId} playnext={playnext} handlePlayNext={handlePlayNext} handleAllSongs={handleAllSongs} songsdb={songs} DarkMode={DarkMode} nowPlaying={handleNowPlaying} />}
        {page === 'addplaylists' && <AddPlayList handleFrom={handleFrom} getCurrentPlaylist={getCurrentPlaylist} page={handlePage} DarkMode={DarkMode} />}
        {page === 'playlist' && <Playlists handleFrom={handleFrom} from={from} setfirstPlayListSongId={setfirstPlayListSongId} fisrtPlayListSongId={fisrtPlayListSongId} page={handlePage} DarkMode={DarkMode} handleNowPlaying={handleNowPlaying} currentPlaylist={currentPlaylist} />}
        {page === 'newPlaylist' && <NewPlaylist page={handlePage} fisrtPlayListSongId={fisrtPlayListSongId}  getCurrentPlaylist={getCurrentPlaylist} DarkMode={DarkMode} />}
        {page === 'search' && <Search nowPlaying={handleNowPlaying} songsdb={songs} page={handlePage} DarkMode={DarkMode} />}
        {page === 'nowPlaying' && <NowPlaying musicInfo={nowPlaying} handleAudiosCurrentTime={handleAudiosCurrentTime} audiosCurrentTime={audiosCurrentTime}   isPlaying={isPlaying} setisPlaying={setisPlaying} playButton={playButton} pauseButton={pauseButton} plaiyingSongIdBeforePlaynext={plaiyingSongIdBeforePlaynext} setplaiyingSongIdBeforePlaynext={setplaiyingSongIdBeforePlaynext} playnextOn={playnextOn} repeatOnButton={repeatOnButton} repeatOfButton={repeatOfButton} shuffleOn={shuffleOn} setshuffleOn={setshuffleOn} repeatOn={repeatOn} setrepeatOn={setrepeatOn} setplaynextOn={setplaynextOn} page={setpage} setplayNextSongIndex={setplayNextSongIndex} playNextSongIndex={playNextSongIndex} playnext={playnext} handlePlayNext={handlePlayNext} from={from} setfirstPlayListSongId={setfirstPlayListSongId} songs={songs} DarkMode={DarkMode} HandleNowPlaying={handleNowPlaying}  handleAllSongs={handleAllSongs} />}
      </div>
    </div>
  );
}

export default App;
