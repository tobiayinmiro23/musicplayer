import React,{useEffect,useState} from 'react'
import  './AddPlayList.css'
import {IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';

const AddPlayList = ({page,DarkMode,handleFrom,getCurrentPlaylist}) => {
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
        if(result.length===0)page('home')

    }

    // function to go to a particular playlist
     const handlePlaylist=(item)=>{
        getCurrentPlaylist(item)
        handleFrom('addplaylists') 
       page('playlist')
     }
   
 
  return (
   <div className={DarkMode ? 'darkMode' : 'lightMode'}>
        <div className='AllPlayLists'>
        <nav>
            <div className="img" onClick={()=>page('home')}>
                    <IconButton>
                        <ArrowBackIcon className={DarkMode ? 'white' : 'black' }/>
                     </IconButton>
            </div>
            <h1>Playlist</h1>
        </nav>
        <main>
            <div className="AddPlaylist" onClick={()=>page('newPlaylist')}>
                <div className="addWrapper">
                    <div className="add">
                    <IconButton>
                            <AddIcon className={DarkMode ? 'white' : 'black' }/>
                     </IconButton>
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
                       <div className="deleteBtn">
                       <IconButton>
                            <DeleteIcon onClick={()=>deletePlaylist(item)} className={DarkMode ? 'white'  : 'black'}/>
                        </IconButton>
                       </div>
                    </div>
            })}
            </div>
        </main>
    </div>
   </div>
  )
}

export default AddPlayList