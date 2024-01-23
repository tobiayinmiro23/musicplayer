import React,{useState,useEffect} from 'react'
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

function NowPlaying({musicInfo,audiosCurrentTime,setisPlaying,isPlaying,playButton,pauseButton,playNextSongIndex,repeatOnButton,repeatOfButton,setshuffleOn,shuffleOn,setrepeatOn,repeatOn,playnextOn,setplaynextOn,plaiyingSongIdBeforePlaynext,setplayNextSongIndex,playnext,handlePlayNext,handleAudiosCurrentTime,from,HandleNowPlaying,setfirstPlayListSongId,handleAllSongs,songs,page,DarkMode}) {
    const [playlist, setplaylist] = useState(false)
    let data= JSON.parse(sessionStorage.getItem('playlistNames')) 
    const [playlists, setplaylists] = useState(data)
    const [successfullyAddedSongToPlaylist, setsuccessfullyAddedSongToPlaylist] = useState(false)
    const [currentMinutes, setcurrentMinutes] = useState(0)
    const [currentSecond, setcurrentSecond] = useState(0)
    const [durationInMinutes, setdurationInMinutes] = useState(0)
    const [durationInSecond, setdurationInSecond] = useState(0)
    const [canplay, setcanplay] = useState(false)
    const [a,seta]=useState(false)
    let audio=document.querySelector('.audio')
    
    // to ensure the seek time in the song component is same with the now playing component
    useEffect(()=>{
        let audio=document.querySelector('.audio')
        audio.setAttribute('src',musicInfo.src)
        audio.currentTime=audiosCurrentTime
        if(isPlaying)audio.play()
        audio.oncanplay=()=>{
            seta(true)
            setcanplay(true)
        }
        // if(durationInMinutes !=0 && durationInSecond !=0)setcanplay(true)
        if(repeatOn){
            let audio=document.querySelector('.audio')
            audio.loop=true
        }
    },[])
    // function to display and remove more options 
     const handleOptions=(e)=>{
        let option=document.querySelectorAll('.info')[0]
        option.classList.toggle('visible')
    }
    const playNext=(Id)=>{
        setplaynextOn(true)
        // the if statement below is to put all the play next song in an array befor the next button is clicked(playing of a playnext song)
         if(playNextSongIndex===1){
              handlePlayNext((a) => [...a,Id])
        //  the else statement below is to put all the play next song in a particular index of an array after the next button is clicked(playing of a playnext song)
            }else{
                playnext.splice(playnext.length+1-playNextSongIndex,0,Id)
            }
        handleOptions()
        }
useEffect(()=>{
  if(a) setcanplay(true)
},[durationInMinutes && durationInSecond])
    // function for the skip button
    const Next=()=>{
        setcanplay(false)
        setisPlaying(true)
        if(playnextOn){
            let id=playnext[playnext.length-playNextSongIndex]
                let result=songs.filter(item=>{
                    return item.originalId === id
                })
             // if the play next songs have all been played, set currently playing song to the id of the song before the playnext button was clicked
             if(result.length === 0 ){
                let id=plaiyingSongIdBeforePlaynext + 1
                let result=songs.filter(item=>{
                    return item.id === id
                })
                audio.setAttribute('src',result[0].src)
                audio.play()
                HandleNowPlaying(result[0])
                handlePlayNext([])
                setplaynextOn(false)
                setplayNextSongIndex(1)
            }else{
                // if there are songs in the play next queue
                audio.setAttribute('src',result[0].src)
                audio.play()
                HandleNowPlaying(result[0])
                setplayNextSongIndex(playNextSongIndex + 1)
            }
           
                //if the shuffle button is on
                }else if(shuffleOn){
            let id=Math.floor(Math.random(16) * songs.length)
            if (id > songs.length)return
                let result=songs.filter(item=>{
                    return item.id === id
                })
                audio.setAttribute('src',result[0].src)
                audio.play()
                HandleNowPlaying(result[0])
        }else{
            let id=musicInfo.id + 1
            if (id > songs.length)return
                let result=songs.filter(item=>{
                    return item.id === id
                })
                audio.setAttribute('src',result[0].src)
                audio.play()
                HandleNowPlaying(result[0])
               
        }
    }
    // function for the previous button
    const Back=()=>{
        setcanplay(false)
        let audio=document.querySelector('.audio')
        setisPlaying(true)
        let id=musicInfo.id - 1
        if (id < 1)return
            let result=songs.filter(item=>{
                return item.id === id
            })
            audio.setAttribute('src',result[0].src)
            audio.play()
            HandleNowPlaying(result[0])
    }

    // function to display playsists 
    const handlePlaylist=()=>{
        setplaylist(true)
        handleOptions()
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
        if(data.indexOf(musicInfo.originalId)!== -1){
            setplaylist(false)
            successfullyAddedToPlaylist()
            return
        }else{
            data.unshift(musicInfo.originalId)
            sessionStorage.setItem(name,JSON.stringify(data))
            setplaylist(false)
            successfullyAddedToPlaylist()
        }
    }
     // function to add the  first playlistSong to a new playlist
     const addFirstPlaylistSong=(id)=>{
        setfirstPlayListSongId(id)
        page('newPlaylist')
    }
      // function to delete a song
      const deleteSong=(musicInfo)=>{
        // i delete the song
        let newSongs=songs.filter(item=>{
            return item.id !== musicInfo
        })
        let id=musicInfo 
        // here i give all the remaining songs new id's 
        let no=1
        newSongs.forEach(item=>{
            item.id=no
            no++
            }) 
            // i update the all song state globally to the remaining songs after the deletion 
        handleAllSongs(newSongs)
                // i set the currently playing song to the song after the deleted song
            let result=songs.filter(item=>{
                return item.id === id
            })
            result.map(item=>{
                HandleNowPlaying(item)
                audio.setAttribute('src',item.src)
            })
            setisPlaying(true)
            audio.play()
             // if you've deleted the last song,go to the song component
            if (id >= songs.length){
                page('songs')
            }
        
        handleOptions()
    }
    // to update the state of the song progress bar
    const handleAudioProgress=(e)=>{
        let audio=document.querySelector('.audio')
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
    // for moving the song bar on click
    const handleAudio=(data)=>{
        let audio=document.querySelector('.audio')
        let a=data.clientX-data.target.offsetLeft
        let width=data.target.clientWidth
        let duration=audio.duration
        audio.currentTime=(a/width) * duration
    }
    
 
  return (
   <div className={DarkMode ? 'darkMode' : 'lightMode'}>
         <div className='NowPlaying'>
        <nav>
            <div className="img" onClick={()=>{
                handleAudiosCurrentTime(0)
                page(from)
            }}>
                        <IconButton>
                            <ArrowBackIcon className={DarkMode ? 'white' : 'black' }/>
                         </IconButton>
            </div>
            <h1>Boom Player</h1>
        </nav>
        <main>
        {successfullyAddedSongToPlaylist && <div className={DarkMode ? 'darkMode'  : 'lightmode'}> <h3 className='successfullyAddedSongToPlaylist'>Song successfully added to playlist</h3></div>}
            <div className="disc">
            </div>
            <div className='info'>
                <div onClick={()=>playNext(musicInfo.originalId)}>
                    <p >Play next</p>
                </div>
                <div onClick={handlePlaylist}>
                    <p>Add to playlist</p>
                </div>
                <p onClick={()=>deleteSong(musicInfo.id)}>Delete</p>
            </div>
            <div className="discContainer">
                <div className="controls">
                <audio className='audio' onTimeUpdate={(e)=>handleAudioProgress(e)} onEnded={Next} src={"../music/Closer (feat. Amanda Lindsey Cook).mp3"}>mm</audio>
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
                            <div onClick={repeatOfButton}>
                                <IconButton>
                                    <RepeatOneIcon className='pink shuffleImg'/>
                                </IconButton>
                            </div>
                            :
                            <div onClick={repeatOnButton}>
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
                            <IconButton>
                                <MoreVertIcon className='pink'/>
                            </IconButton>
                    </div>
                </div>
            </div>
            <div className="musciLength">
                <div  onClick={(e)=>{handleAudio(e)}} className='progressContainer' >
                    <div className="progress"></div>
                </div> 
            </div>

            <div className="musicTime">
                <p className='left'>{currentMinutes + ':' + currentSecond}</p>
                <p className='right'>{durationInMinutes + ':' + durationInSecond}</p>
            </div>
            <div className="musicButton">
                <div className="backward" onClick={Back}>
                    <IconButton>
                        <SkipPreviousIcon className='pink controlBtn'/>
                    </IconButton>
                </div>
                <div className="play">
                    {
                        canplay ?
                        <div>
                            {
                            isPlaying 
                            ?
                            <div onClick={pauseButton}>
                                <IconButton>
                                    <PauseIcon className='pink controlBtn'/>
                                </IconButton>
                            </div>
                            :
                            <div onClick={playButton}>
                                <IconButton>
                                    <PlayArrowIcon className='pink controlBtn'/>
                                </IconButton>
                            </div>
                        }
                        </div>

                        :
                        <div className="round"></div>
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
                            <div className="AddPlaylist" onClick={()=>addFirstPlaylistSong(musicInfo.originalId)}>
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
                                return <div className="playlistSongs" key={item} onClick={()=>addToPlaylist(item)}>
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
   </div>
  )
}

export default NowPlaying
