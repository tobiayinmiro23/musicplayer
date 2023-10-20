import React,{useState,useEffect} from 'react'
import { allSongs } from './AllSongsDb';
import {IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Playlists = ({currentPlaylist,page}) => {
    const [playlistSongs, setplaylistSongs] = useState([])
  
    useEffect(()=>{
        getData()
    },[])
    // function to get the id's of the playlist songs,filter them and get the playlist songs
    const getData=()=>{
    let currentPlaylistSongsId= JSON.parse(sessionStorage.getItem(currentPlaylist))
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
  return (
    <div className='playlists'>
        <h1 onClick={()=>page('addplaylists')}>testing</h1>
        <h1>{currentPlaylist}</h1>
        <div className="kkk" >
            {playlistSongs?.map(item=>{
            return <div key={item?.id}  className="wrapper">
                    <div className="songImg"></div>
                    <div className="info" >
                        <h4>{item?.song}</h4>
                        <div className="artist">
                            <p>{item?.artist}</p>
                            <p>{item?.time}</p>
                        </div>
                    </div>
                    <button onClick={()=>deleteSongtest(item?.originalId)}>delete</button>
                    <div className="options" >
                            <IconButton>
                                <MoreVertIcon className='white'/>
                            </IconButton>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Playlists