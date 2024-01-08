import React,{useState} from 'react'
import './NewPlaylist.css'
import {IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const NewPlaylist = ({page,DarkMode,handlePlaylist}) => {
  const [playlistName, setplaylistName] = useState([])
  
// function to get list of playlists
let data= JSON.parse(sessionStorage.getItem('playlistNames'))

  const forPlaylist=(e)=>{
      handlePlaylist((a) => [...a, playlistName])
      sessionStorage.setItem(playlistName,JSON.stringify([]))

      let data= JSON.parse(sessionStorage.getItem('playlistNames'))
        console.log(data)
        let cart=[]
        data?.map(item=>{
            cart.push(item)
        })
        cart.push(playlistName)
      sessionStorage.setItem('playlistNames',JSON.stringify(cart))

    //   if(data.length){
        // let a=data?.map(item=>{
        //     return item  === 'first' 
        // })
        if(  playlistName ===''  ){
            console.log('name already taken')
        }else{
            console.log('name looks good')
        }
        

    //    }
    //   }
      setplaylistName('')
      page('playlists')
  }
  data?.filter(item=>{
    // return item.i
})
let list=['first','second']
// let a=list.filter(item=>{
//     return item.includes('firsto')
// })
let b=list.map(item=>{
    return item  === 'firsto' 
})
// console.log(a)
console.log(b)

  return (
    <div className={DarkMode ? 'NewPlaylistDark' : 'NewPlaylist'}>
        <nav >
            <div className="img" onClick={()=>page('playlists')}>
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
            <input type="text"  onInput={(e)=>setplaylistName(e.target.value)} value={playlistName} name="" id="" />
            <div className="playlistBtn">
                <h4 onClick={forPlaylist}>Create</h4>
                <h4 onClick={()=>page('playlists')}>Cancel</h4>
            </div>
            {/* </form> */}
        </div>
    </div>
  )
}

export default NewPlaylist