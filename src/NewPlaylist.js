import React,{useState,useEffect,useRef} from 'react'
import './NewPlaylist.css'
import {IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const NewPlaylist = ({page,fisrtPlayListSongId,DarkMode,getCurrentPlaylist}) => {
  const [playlistName, setplaylistName] = useState('')
  const [playlistCannotBeEmpty, setplaylistCannotBeEmpty] = useState(false)
  const [playlistAlreadyExist, setplaylistAlreadyExist] = useState(false)
  let inputField=useRef()
    useEffect(()=>{
      inputField.current.focus()
    },[])

    // function to create a playlist
  const createPlaylist=(e)=>{
    let allPlaylistNames= JSON.parse(sessionStorage.getItem('playlistNames')) 
    // to check if playlist already exist  
    let a=allPlaylistNames?.filter(item=>{
        return item  === playlistName 
    })
      // if the playlist name is empty
        if(  playlistName.trim() ===''  ){
            handleEmptyPlaylist()
        }else if(a?.length === 0){
            sessionStorage.setItem(playlistName,JSON.stringify([]))
            let newPlayListNames=[]
            allPlaylistNames?.map(item=>{
                newPlayListNames.push(item)
            })
            newPlayListNames.push(playlistName)
          sessionStorage.setItem('playlistNames',JSON.stringify(newPlayListNames))
          getCurrentPlaylist(playlistName)
        //  to check if the user is just creating a new playlist or is creating a new playlist and adding a song to it  
          if(fisrtPlayListSongId === undefined){
                page('addplaylists')
          }else{
              page('playlist')
          }
          // if the playlist already exists
        }else{
          handlePlaylistAlreadyExists()
        }
      setplaylistName('')
  }

  //function to handle if the playlist name inputfield is empty
    const handleEmptyPlaylist=()=>{
      setplaylistCannotBeEmpty(true)
      setTimeout(()=>{
      setplaylistCannotBeEmpty(false)
      },1000)
  }

  // function to handle if the playlist already exist
    const handlePlaylistAlreadyExists=()=>{
      setplaylistAlreadyExist(true)
      setTimeout(()=>{
      setplaylistAlreadyExist(false)
      },1000)
  }


  return (
    <div  className={DarkMode ? 'darkMode' : 'lightMode'}>
        <div className='NewPlaylist'>
        <nav >
            <div className="img" onClick={()=>page('addplaylists')}>
            <IconButton>
              <ArrowBackIcon className={DarkMode ? 'white' : 'black' }/>
            </IconButton>
            </div> 
            <h1>New Playlist</h1>
        </nav>
        {playlistAlreadyExist && <div className={DarkMode ? 'darkMode'  : 'lightmode'}> <h3 className='successfullyAddedSongToPlaylist'>Playlist already exists</h3></div>}
        {playlistCannotBeEmpty && <div className={DarkMode ? 'darkMode'  : 'lightmode'}> <h3 className='successfullyAddedSongToPlaylist'>Playlist name cannot be empty</h3></div>}
        <div className="NewPlaylistWrapper">
            <h2>Create new playlist</h2>
            <p>Title</p>
            <input type="text"  onInput={(e)=>setplaylistName(e.target.value)} value={playlistName} ref={inputField} name="" id="" />
            <div className="playlistBtn">
                <h4 onClick={createPlaylist}>Create</h4>
                <h4 onClick={()=>page('playlists')}>Cancel</h4>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NewPlaylist
