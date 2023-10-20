import React,{useState} from 'react'
import './NowPlaying.css'
import {IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClearIcon from '@mui/icons-material/Clear';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import AddIcon from '@mui/icons-material/Add';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import { allSongs } from './AllSongsDb';
import { DarkMode } from '@mui/icons-material';
import { Volume } from './Volume';

function NowPlaying({musicInfo,HandleNowPlaying,handleAllSongs,songs,page,DarkMode,playlists}) {
    const [isPlaying, setisPlaying] = useState(true)
    const [shuffleOn, setshuffleOn] = useState(false)
    const [repeatOn, setrepeatOn] = useState(false)
    const [playlist, setplaylist] = useState(false)
    
    // function to display and remove more options 
     const handleOptions=(e)=>{
        let option=document.querySelectorAll('.info')[0]
        option.classList.toggle('visible')
    }
    // function for the skip button
    const Next=()=>{
        if(shuffleOn){
        let id=Math.floor(Math.random(16) * songs.length)
        console.log(id)
            if (id > songs.length)return
                let result=songs.filter(item=>{
                    return item.id === id
                })
                result.map(item=>HandleNowPlaying(item))
        }else{
            let id=musicInfo.id + 1
            if (id > songs.length)return
                let result=songs.filter(item=>{
                    return item.id === id
                })
                result.map(item=>HandleNowPlaying(item))
        }
    }
    // function for the previous button
    const Back=()=>{
        let id=musicInfo.id - 1
        if (id < 1)return
            let result=songs.filter(item=>{
                return item.id === id
            })
            result.map(item=>HandleNowPlaying(item))
}
    // function to display playsists 
    const handlePlaylist=()=>{
        setplaylist(true)
        handleOptions()
    }
        console.log(musicInfo)
      // function to delete a song
      const deleteSong=(musicInfo)=>{
        let newSongs=songs.filter(item=>{
            return item.id !== musicInfo
        })
        // here i give all the remaining songs new id 
        let no=1
        newSongs.forEach(item=>{
            item.id=no
            no++
            })  
            console.log(newSongs)
        handleAllSongs(newSongs)
        // setallsongs(newSongs)
        let id=musicInfo 
        // if (id > songs.length)return
            let result=songs.filter(item=>{
                return item.id === id
            })
            result.map(item=>HandleNowPlaying(item))
        
        // to update the state of the songs through out the application
        handleOptions()
    }
 
  return (
    <div className={DarkMode ? 'NowPlayingDark' : 'NowPlaying'}>
        <nav>
            <div className="img" onClick={()=>page('songs')}>
            {
                        DarkMode ?
                        <IconButton>
                            <ArrowBackIcon className='white'/>
                         </IconButton>
                        :
                        <IconButton>
                        <ArrowBackIcon className='black'/>
                        </IconButton>
    
                    }
            </div>
            <h1>Boom Player</h1>
        </nav>
        <main>
            <div className="disc">
            </div>
            <div className='info'>
                <div onClick={handleOptions}>
                    <p >Play next</p>
                </div>
                <div onClick={handlePlaylist}>
                    <p>Add to playlist</p>
                </div>
                <p onClick={()=>deleteSong(musicInfo.id)}>Delete</p>
            </div>
            <div className="discContainer">
                <div className="controls">
                    <div className="shuffle">
                    {
                            shuffleOn 
                            ?
                            <div onClick={()=>setshuffleOn(false)}>
                                <IconButton>
                                    <ShuffleOnIcon className='pink shuffleImg'/>
                                </IconButton>
                            </div>
                            :
                             <div onClick={()=>{
                                setshuffleOn(true)
                                setrepeatOn(false)
                            }}>
                                <IconButton>
                                    <ShuffleIcon className='pink shuffleImg'/>
                                </IconButton>
                            </div>
                        }
                    </div>
                    <div className="repeat">
                    {
                            repeatOn 
                            ?
                            <div onClick={()=>setrepeatOn(false)}>
                                <IconButton>
                                    <RepeatOneIcon className='pink shuffleImg'/>
                                </IconButton>
                            </div>
                            :
                            <div onClick={()=>{
                                setrepeatOn(true)
                                setshuffleOn(false)
                            }}>
                                <IconButton>
                                    <RepeatIcon className='pink shuffleImg'/>
                                </IconButton>
                            </div>
                        }
                    </div>
                </div>
                <div className="musicInfo">
                <h3 className='laptop'>{musicInfo.song}-{musicInfo.artist}</h3>
                <marquee behavior="scroll" className='mobile' direction="left"><h3>{musicInfo.song}-{musicInfo.artist}</h3></marquee>
                </div>
                
                <div className="optionsWrapper">
                    <div className="option" onClick={handleOptions}>
                        {
                            DarkMode ?
                            <IconButton>
                                <MoreVertIcon className='pink'/>
                            </IconButton>
                            :
                            <IconButton>
                                <MoreVertIcon className='pink'/>
                            </IconButton>
                        }
                    </div>
                </div>
            </div>
            <div className="musciLength">
                {/* <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div> */}
                <Volume className='pink'/>
            </div>

            <div className="musicTime">
                <p className='left'>0:00</p>
                <p className='right'>{musicInfo.time}</p>
            </div>
            <div className="musicButton">
                <div className="backward" onClick={Back}>
                    <IconButton>
                        <SkipPreviousIcon className='pink controlBtn'/>
                    </IconButton>
                </div>
                <div className="play">
                    {
                            isPlaying 
                            ?
                            <div onClick={()=>setisPlaying(false)}>
                                <IconButton>
                                    <PauseIcon className='pink controlBtn'/>
                                </IconButton>
                            </div>
                            :
                            <div onClick={()=>setisPlaying(true)}>
                                <IconButton>
                                    <PlayArrowIcon className='pink controlBtn'/>
                                </IconButton>
                            </div>
                        }
                </div>
                <div className="forward" onClick={Next}>
                    <IconButton>
                        <SkipNextIcon className='pink controlBtn'/>
                    </IconButton>
                </div>
            </div>
            <div className='absolute'>
                {
                    playlist &&
                    <div className={DarkMode ? 'PlayListDark' : 'PlayList'}>
                        <main>
                            <div className="playlistCancel" onClick={()=>setplaylist(false)}>
                                <IconButton>
                                    <ClearIcon className='pink'/>
                                </IconButton>
                            </div>
                            <div className="AddPlaylist" onClick={()=>page('newPlaylist')}>
                                <div className="addWrapper" >
                                    <div className="add">
                                    {
                                    DarkMode ?
                                    <IconButton>
                                            <AddIcon className='white'/>
                                    </IconButton>
                                    :
                                    <IconButton>
                                            <AddIcon className='black'/>
                                    </IconButton>

                                }
                                    </div>
                                </div>
                                <h3>New Playlist</h3>
                            </div>
                            <div className="playlistsContainer">
                            {playlists.map(item=>{
                                return <div className="playlistSongs" key={item} onClick={()=>setplaylist(false)}>
                                            <div className="img" ></div>
                                            <h3>{item}</h3>
                                        </div>
                                })}
                            </div>
                        </main>
                    </div>
                }
            </div>
        </main>
    </div>
  )
}

export default NowPlaying