import React ,{useState,useEffect}from 'react'
import './Songs.css'
import {IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DeleteIcon from '@mui/icons-material/Delete';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import VolumeDown from '@mui/icons-material/VolumeDown';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const Songs = ({nowPlaying,setisPlaying,isPlaying,playButton,pauseButton,repeatOnButton,repeatOfButton,setshuffleOn,shuffleOn,setrepeatOn,repeatOn,playNextSongIndex,playnextOn,setplaiyingSongIdBeforePlaynext,plaiyingSongIdBeforePlaynext,setplaynextOn,setplayNextSongIndex,page,DarkMode,songsdb,handleFrom,setfirstPlayListSongId,handleAllSongs,playnext,handlePlayNext,handleAudiosCurrentTime}) => {
    const [Playing, setPlaying] = useState('')
    const [optionInfo, setoptionInfo] = useState('')
    const [allsongs, setallsongs] = useState(songsdb)
    const [playlistId, setplaylistId] = useState([])
    const [playlist, setplaylist] = useState(false)
    let data= JSON.parse(sessionStorage.getItem('playlistNames')) 
    const [playlists, setplaylists] = useState(data)
    const [successfullyAddedSongToPlaylist, setsuccessfullyAddedSongToPlaylist] = useState(false)
    const [currentMinutes, setcurrentMinutes] = useState(0)
    const [currentSecond, setcurrentSecond] = useState(0)
    const [durationInMinutes, setdurationInMinutes] = useState(0)
    const [durationInSecond, setdurationInSecond] = useState(0)
    let audio=document.querySelector('.audio')
    // function to show currently playing song 
    const displayPlaying=(songinfo)=>{
        let audio=document.querySelector('.audio')
        audio.setAttribute('src',songinfo.src)
        audio.play()
        nowPlaying(songinfo)
        setPlaying(songinfo)
        setisPlaying(true)
        setplaiyingSongIdBeforePlaynext(songinfo.id)
        let currentlyPlaying=document.querySelectorAll('.NowPlaying')[0]
        let songs=document.querySelectorAll('.kkk')[0]
        songs.classList.add('songsWrapper')
        currentlyPlaying.classList.add('block')
       
    }
    useEffect(()=>{
        if(repeatOn){
            let audio=document.querySelector('.audio')
            audio.loop=true
        }
       },[])
    // function for the playnext functionality
    const playNext=(Id)=>{
        setplaynextOn(true)
          setplaiyingSongIdBeforePlaynext(Playing.id)
        //   the if statement below is to put all the play next song in an array befor the next button is clicked(playing of a playnext song)
         if(playNextSongIndex===1){
              handlePlayNext((a) => [...a,Id])
        //   the else statement below is to put all the play next song in a particular index of an array after the next button is clicked(playing of a playnext song)
            }else{
                playnext.splice(playnext.length+1-playNextSongIndex,0,Id)
            }
          removeOptions() 
        }

    //function for the next button 
    const Next=()=>{
    let audio=document.querySelector('.audio')
    setisPlaying(true)
        if(playnextOn){
       let id=playnext[playnext.length-playNextSongIndex]
            let result=allsongs.filter(item=>{
                return item.originalId === id
            })
         // if the play next songs have all been played, set currently playing song to the id of the song before the playnext button was clicked
         if(result.length === 0 ){
            let id=plaiyingSongIdBeforePlaynext + 1
            let result=allsongs.filter(item=>{
                return item.id === id
            })
            audio.setAttribute('src',result[0].src)
            audio.play()
            setPlaying(result[0])
            handlePlayNext([])
            setplaynextOn(false)
            setplayNextSongIndex(1)
        }else{
            // if there are songs in the play next queue
            audio.setAttribute('src',result[0].src)
            audio.play()
            setPlaying(result[0])
            setplayNextSongIndex(playNextSongIndex + 1)
        }
        //if the shuffle button is on
        }else if(shuffleOn){
            let id=Math.floor(Math.random(16) * allsongs.length)
            if (id > allsongs.length)return
                let result=allsongs.filter(item=>{
                    return item.id === id
                })
                audio.setAttribute('src',result[0].src)
                audio.play()
                setPlaying(result[0])
        }else{
            // if neither the shuffle nor the playnext is clicked
            let id=Playing.id + 1
            if (id > allsongs.length) return
                let result=allsongs.filter(item=>{
                    return item.id === id
                })
                audio.setAttribute('src',result[0].src)
                audio.play()
                setPlaying(result[0])
        }
    }
 
    // for the previous button
    const Back=()=>{
            setisPlaying(true)
            let id=Playing.id - 1
            if (id < 1)return
                let result=allsongs.filter(item=>{
                    return item.id === id
                })
                audio.setAttribute('src',result[0].src)
                audio.play()
                setPlaying(result[0])
    }
   
    // function to remove currently playing song 
    const cancelPlaying=()=>{
        let currentlyPlaying=document.querySelectorAll('.NowPlaying')[0]
        let songs=document.querySelectorAll('.kkk')[0]
        let audio=document.querySelector('.audio')
        audio.pause()
         songs.classList.remove('songsWrapper')
        currentlyPlaying.classList.remove('block')
    }
    // function to delete a song
    const deleteSong=(id)=>{
        let newSongs=allsongs.filter(item=>{
            return item.id !== id
        })
        // here i give all the remaining songs new id to prevent repeating of songs
        let no=1
        newSongs.forEach(item=>{
            item.id=no
            no++
            })  
        setallsongs(newSongs)
        // if the user deletes the current song
        if(id=== Playing.id){
            cancelPlaying()
        }
        // to update the state of the songs through out the application
        handleAllSongs(newSongs)
        removeOptions()
    }
    // function to display more options like add to playlist,delete 
    const handleOptions=(musicinfo)=>{
        let current=document.querySelector('.current')
        setoptionInfo(musicinfo)
        current.classList.toggle('currentVisible')
    }

    // function to remove options 
    const removeOptions=()=>{
        let current=document.querySelector('.current')
        current.classList.remove('currentVisible')
    }
   
    // function  to display playlists 
    const displayPlaylist=(id)=>{
        setplaylist(true)
        setplaylistId(id)
        removeOptions()
    }
    // function to add the  first playlistSong to a new playlist
    const addFirstPlaylistSong=(id)=>{
        setfirstPlayListSongId(id)
        page('newPlaylist')
    }
    // function to display successfully added to playlist message
    const successfullyAddedToPlaylist=()=>{
        setsuccessfullyAddedSongToPlaylist(true)
        setTimeout(()=>{
        setsuccessfullyAddedSongToPlaylist(false)
        },1000)
    }

    // function  to add to playlists 
    const addToPlaylist=(name)=>{
        let data= JSON.parse(sessionStorage.getItem(name))
        if(data.indexOf(playlistId)!== -1){
            setplaylist(false)
            successfullyAddedToPlaylist()
            return
        }else{
            data.unshift(playlistId)
            sessionStorage.setItem(name,JSON.stringify(data))
            setplaylist(false)
            successfullyAddedToPlaylist()
        }
        handleFrom('songs')
    }
    // for moving the song bar on click
     const handleAudio=(data)=>{
        let audio=document.querySelector('.audio')
        let a=data.clientX-data.target.offsetLeft
        let width=data.target.clientWidth
        let duration=audio.duration
        audio.currentTime=(a/width) * duration
    }


    // to update the state of the song progress bar
    const handleAudioProgress=(e)=>{
        let progress=document.querySelector('.progress')
            const{duration,currentTime}=e.target
            const progressPersent=(currentTime/duration) * 100
            progress.style.width=progressPersent+'%'
            if(audio.duration){
                let currentMinutes=Math.floor(audio.currentTime / 60)
                setcurrentMinutes(Math.floor(audio.currentTime / 60))
                let currentSecond=Math.floor(audio.currentTime-currentMinutes * 60)
                setcurrentSecond(Math.floor(audio.currentTime-currentMinutes * 60))
                let durationInMinutes=Math.floor(audio.duration / 60)
                setdurationInMinutes(Math.floor(audio.duration / 60))
                setdurationInSecond(Math.floor(audio.duration-durationInMinutes * 60))
                let durationInSecond=Math.floor(audio.duration-durationInMinutes * 60)
                
                if(currentSecond < 10){
                        setcurrentSecond('0'+currentSecond)
                }
                if(durationInSecond < 10){
                        setdurationInSecond('0'+durationInSecond)
                }
            }
    }

  return (
    <div className={DarkMode ? 'darkMode'  : 'lightmode'}>
        <div className='Songs'>
        <nav>
            <div className="img" onClick={()=>page('home')}>
                        <IconButton>
                            <ArrowBackIcon className={DarkMode ? 'white'  : 'black'}/>
                         </IconButton>
            </div>
            <h1>songs</h1>
            <div className="search" onClick={()=>page('search')}>
                        <IconButton>
                            <SearchIcon className={DarkMode ? 'white'  : 'black'}/>
                         </IconButton>
            </div>
        </nav>
        <div className="kkk" >
        {successfullyAddedSongToPlaylist && <div className={DarkMode ? 'darkMode'  : 'lightmode'}> <h3 className='successfullyAddedSongToPlaylist'>Song successfully added to playlist</h3></div>}
            {allsongs.map(item=>{
            return <div key={item.id}  className="wrapper">
                    <div className="songImg"></div>
                    <div className="info" onClick={()=>displayPlaying(item)}>
                        <h4>{item.song}</h4>
                        <div className="artist">
                            <p>{item.artist}</p>
                            <p>{item.time}</p>
                        </div>
                    </div>
                    <div className="options" onClick={()=>handleOptions(item)}>
                            <IconButton>
                                <MoreVertIcon className={DarkMode ? 'white'  : 'black'}/>
                            </IconButton>
                    </div>
                </div>
            })}
        </div>
        <div className="current">
            <div className="currentSong">
                <div className="songImg"></div>
                <div className="currentSongInfo">
                    <h2 className='laptop'>{optionInfo.song}-{optionInfo.artist}</h2>
                    <h2 className='mobile'><marquee behavior="scroll" direction="left">{optionInfo.song}-{optionInfo.artist}</marquee></h2>
                    <p>{optionInfo.time}</p>
                </div>
                <div className="cancel">
                        <IconButton onClick={removeOptions}>
                            <ClearIcon className={DarkMode ? 'white'  : 'black'}/>
                        </IconButton>
                </div>
            </div>
            <div className="currentInfo">
                <div className="container" onClick={()=>playNext(optionInfo.originalId)}>
                        <IconButton>
                            <PlaylistPlayIcon className={DarkMode ? 'white'  : 'black'}/>
                        </IconButton>
                    <p>Play next</p>
                </div>
                <div className="container" onClick={()=>displayPlaylist(optionInfo.originalId)}>
                        <IconButton>
                            <PlaylistAddIcon className={DarkMode ? 'white'  : 'black'}/>
                        </IconButton>
                    <p>Add to playlist</p>
                </div>
                <div className="container"onClick={()=>deleteSong(optionInfo.id)}>
                        <IconButton>
                            <DeleteIcon className={DarkMode ? 'white'  : 'black'}/>
                        </IconButton>
                    <p >Delete</p>
                </div>
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
                            <div className="AddPlaylist" onClick={()=>addFirstPlaylistSong(optionInfo.id)}>
                                <div className="addWrapper" >
                                    <div className="add">
                                    <IconButton>
                                            <AddIcon className={DarkMode ? 'white'  : 'black'}/>
                                    </IconButton>
                                    </div>
                                </div>
                                <h3>New Playlist</h3>
                            </div>
                            <div className="playlistsContainer">
                            {playlists?.map(item=>{
                                return <div className="playlistSongs" key={item} onClick={()=>addToPlaylist(item)} >
                                            <div className="img" ></div>
                                            <h3>{item}</h3>
                                        </div>
                                })}
                            </div>
                        </main>
                    </div>
                }
        </div>
             
        <div className="NowPlaying">
            <div className="NowPlayingWrapper">
                <div className='Container' onClick={()=>{
                    nowPlaying(Playing)
                    handleAudiosCurrentTime(audio.currentTime)
                    handleFrom('songs')
                    page('nowPlaying')
                }}>
                    <div className="NowPlayingImg">
                    </div>
                    <div className='NowPlayinginfoWrapper'>
                        <div className="NowPlayinginfo">
                            <h4 className='laptop' id='song '>{Playing.song} - {Playing.artist}</h4>
                        </div>
                        <marquee behavior="scroll"  direction="left"><h4 id='song' className='mobile'>{Playing.song} - {Playing.artist}</h4></marquee>
                    </div>
                </div>
                <div className='musicButtonContainer'>
                            <div className="musicButton">
                                <div className="shuffle">
                                {
                                        shuffleOn 
                                        ?
                                        <div onClick={()=>setshuffleOn(false)}>
                                            <IconButton>
                                                <ShuffleOnIcon className='pink repeatImg'/>
                                            </IconButton>
                                        </div>
                                        :
                                        <div onClick={()=>{
                                            setshuffleOn(true)
                                            setrepeatOn(false)
                                        }}>
                                            <IconButton>
                                                <ShuffleIcon className='pink repeatImg'/>
                                            </IconButton>
                                        </div>
                                    }
                                </div>
                                <div className="backward" onClick={Back}>
                                    <IconButton>
                                        <SkipPreviousIcon className='pink'/>
                                    </IconButton>
                                </div>
                                <div className="play">
                                    {
                                            isPlaying 
                                            ?
                                            <div onClick={pauseButton}>
                                                <IconButton>
                                                    <PauseIcon className='pink'/>
                                                </IconButton>
                                            </div>
                                            :
                                            <div onClick={playButton}>
                                                <IconButton>
                                                    <PlayArrowIcon className='pink'/>
                                                </IconButton>
                                            </div>
                                        }
                                </div>
                                <audio className='audio' onTimeUpdate={(e)=>handleAudioProgress(e)} onEnded={Next} src={"../music/Closer (feat. Amanda Lindsey Cook).mp3"}>mm</audio>
                                <div className="forward" onClick={Next}>
                                    <IconButton>
                                        <SkipNextIcon className='pink'/>
                                    </IconButton>
                                </div>
                                <div className="repeat">
                                {
                                        repeatOn 
                                        ?
                                        <div onClick={repeatOfButton}>
                                            <IconButton>
                                                <RepeatOneIcon className='pink repeatImg'/>
                                            </IconButton>
                                        </div>
                                        :
                                        <div onClick={repeatOnButton}>
                                            <IconButton>
                                                <RepeatIcon className='pink repeatImg'/>
                                            </IconButton>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="currentMusicLength">
                            <div onClick={(e)=>{handleAudio(e)}} className='progressContainer' >
                                <div className="progress"></div>
                            </div> 
                            <div className="musicTime">
                                <p className='left'>{currentMinutes + ':' + currentSecond}</p>
                                <p className='right'>{durationInMinutes + ':' + durationInSecond}</p>
                            </div>
                            </div>
                </div>
                <div className="cancelWrapper">
                    <div className="pause-play">
                        {
                            isPlaying 
                            ?
                            <div onClick={pauseButton}>
                                <IconButton>
                                    <PauseIcon className='pink'/>
                                </IconButton>
                            </div>
                            :
                            <div onClick={playButton}>
                                <IconButton>
                                    <PlayArrowIcon className='pink'/>
                                </IconButton>
                            </div>
                        }
                    </div>
                    <div className="Volume">
                        <VolumeDown className='pink'/>
                        <Box width={160}>
                            <Slider
                            size="small"
                            className='vol'
                            defaultValue={90}
                            secondary= 'teal'
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            />
                        </Box>
                    </div>
                    <div className="cancel"  onClick={cancelPlaying}>
                        <IconButton>
                            <ClearIcon className='pink'/>
                        </IconButton>
                    </div>
                </div>

            </div>
        
        </div>
       
    </div>
    </div>
  )
}

export default Songs
