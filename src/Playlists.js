import React,{useState,useEffect} from 'react'
import { allSongs } from './AllSongsDb';
import  './Playlists.css'
import {IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Playlists = ({DarkMode,currentPlaylist,handleFrom,handleNowPlaying,setfirstPlayListSongId,fisrtPlayListSongId,page}) => {
    const [playlistSongs, setplaylistSongs] = useState([])
    let currentPlaylistSongsId= JSON.parse(sessionStorage.getItem(currentPlaylist))
    useEffect(()=>{
        getData()
    },[])
    // function to get the id's of the playlist songs,filter them and get the playlist songs
    const getData=()=>{
    let currentPlaylistSongsId= JSON.parse(sessionStorage.getItem(currentPlaylist))
      // the if statement below is for adding the first song to a playlist
    if(currentPlaylistSongsId.length===0 && fisrtPlayListSongId!==undefined){
      let result=[]
          let playlistSongs=allSongs.filter(res =>{
            return res.originalId === fisrtPlayListSongId
            })
            if(playlistSongs.length !== 0){
              result.push(playlistSongs[0])
              setplaylistSongs(result)
            }
              sessionStorage.setItem(currentPlaylist,JSON.stringify([result[0].originalId]))
              setfirstPlayListSongId()
        }
      // the  statement below is for adding the all other songs to a playlist
        let result=[]
        currentPlaylistSongsId?.forEach(item =>{
          let playlistSongs=allSongs.filter(res =>{
            return res.originalId === item
            })
            if(playlistSongs.length !== 0){
              result.push(playlistSongs[0])
              setplaylistSongs(result)
              }
            })
      }

      // function to delete a song from the current playlist
    const deleteSongtest=(id)=>{
      let allSongs=playlistSongs.filter(item=>{
        return item.originalId  !== id
    })
    let result=[]
     allSongs.map(item=>{
        result.push(item.originalId)
    })
    if(allSongs.length===0)page('songs')
    setplaylistSongs(allSongs)
    sessionStorage.setItem(currentPlaylist,JSON.stringify(result))
    }
    // function to play a particular song 
    const playSong=(item)=>{
      handleNowPlaying(item)
      handleFrom('playlist')
      page('nowPlaying')
    }
  return (
   <div className={DarkMode ? 'darkMode' : 'lightMode'}>
    <div className='PlayList'>
      <nav>
            <div className="img" onClick={()=>page('addplaylists')}>
                    <IconButton>
                        <ArrowBackIcon className={DarkMode ? 'white' : 'black' }/>
                     </IconButton>
            </div>
            <h1>{currentPlaylist}</h1>
            <div></div>
        </nav>
        {currentPlaylistSongsId.length ===0 && <h1 className='emptyPlaylist'>Playlist is currently empty</h1>}
        <div className="kkk" >
            {playlistSongs?.map(item=>{
            return <div key={item?.id}  className="wrapper">
                    <div className="songImg"></div>
                    <div className="info" onClick={()=>playSong(item)}>
                        <h4>{item?.song}</h4>
                        <div className="artist">
                            <p>{item?.artist}</p>
                            <p>{item?.time}</p>
                        </div>
                    </div>
                      <div className="delet_btn">
                      <IconButton>
                            <DeleteIcon onClick={()=>deleteSongtest(item?.originalId)} className={DarkMode ? 'white'  : 'black'}/>
                        </IconButton>
                      </div>
                </div>
            })}
        </div>
    </div>
   </div>
    
  )
}

export default Playlists