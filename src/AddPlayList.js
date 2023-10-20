import React,{useEffect,useState} from 'react'
import  './AddPlayList.css'
import {IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';

const AddPlayList = ({page,DarkMode,playlists,getCurrentPlaylist}) => {
    let data= JSON.parse(sessionStorage.getItem('playlistNames')) 
    const [playlist, setplaylist] = useState(data)


    // function to delete a playlist
    const deletePlaylist=(playlistName)=>{
        let allPlaylistName= JSON.parse(sessionStorage.getItem('playlistNames')) 
        let result=allPlaylistName?.filter(item=>{
            return item  !== playlistName
        })
        setplaylist(result)
        sessionStorage.setItem('playlistNames',JSON.stringify(result))
        sessionStorage.removeItem(playlistName)
    }

    // function to go to a particular playlist
     const handlePlaylist=(item)=>{
        getCurrentPlaylist(item)
       page('playlist')
     }
   
 
  return (
    <div className={DarkMode ? 'PlayListDark' : 'PlayList'}>
        <nav>
            <div className="img" onClick={()=>page('home')}>
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
            <h1>Playlist</h1>
        </nav>
        <main>
            <div className="AddPlaylist" onClick={()=>page('newPlaylist')}>
                <div className="addWrapper">
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
            {playlist?.map(item=>{
                return <div className="playlistSongs" key={item} >
                        <div className="playlistSongsDetails" onClick={()=>handlePlaylist(item)}>
                            <div className="img"></div>
                            <h3>{item}</h3>
                        </div>
                        <button onClick={()=>deletePlaylist(item)}>delete</button>
                    </div>
            })}
            </div>
            {/* <div className="playlistsContainer">
            {playlists.map(item=>{
                return <div key={item}>
                        <div className="playlistSongs">
                            <div className="img"></div>
                            <h3>{item}</h3>
                        </div>
                    </div>
            })}
            </div> */}
        </main>
    </div>
  )
}

export default AddPlayList