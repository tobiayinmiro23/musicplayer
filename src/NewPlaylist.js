import React,{useState,useEffect,useRef} from 'react'
import './NewPlaylist.css'
import {IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const NewPlaylist = ({page,DarkMode,handlePlaylist}) => {
  const [playlistName, setplaylistName] = useState('')
  let inputField=useRef()
    useEffect(()=>{
      inputField.current.focus()
    },[])
  const createPlaylist=(e)=>{
    let allPlaylistNames= JSON.parse(sessionStorage.getItem('playlistNames')) 
    // to check if playlist already exist  
    let a=allPlaylistNames?.filter(item=>{
        return item  === playlistName 
    })
        if(  playlistName ===''  ){
            alert('name cannot be empty')
        }else if(a?.length === 0){
            sessionStorage.setItem(playlistName,JSON.stringify([]))
            let newPlayListNames=[]
            allPlaylistNames?.map(item=>{
                newPlayListNames.push(item)
            })
            newPlayListNames.push(playlistName)
          sessionStorage.setItem('playlistNames',JSON.stringify(newPlayListNames))
          page('addplaylists')
        }else{
            alert('playlist already exist')
        }
      setplaylistName('')
  }

  return (
    <div className={DarkMode ? 'NewPlaylistDark' : 'NewPlaylist'}>
        <nav >
            <div className="img" onClick={()=>page('addplaylists')}>
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
            <h1>New Playlist</h1>
        </nav>
        <div className="NewPlaylistWrapper">
            <h2>Create new playlist</h2>
            <p>Title</p>
            {/* <form action=""> */}
            <input type="text"  onInput={(e)=>setplaylistName(e.target.value)} value={playlistName} ref={inputField} name="" id="" />
            <div className="playlistBtn">
                <h4 onClick={createPlaylist}>Create</h4>
                <h4 onClick={()=>page('playlists')}>Cancel</h4>
            </div>
            {/* </form> */}
        </div>
    </div>
  )
}

export default NewPlaylist