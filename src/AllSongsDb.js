
export const allSongs=[
    {
        song:'Blow my mind',
        artist:'Davido ft Chris brown',
        time:'3:32',
        id:1,
        originalId:1
    },
    {
        song:'23',
        artist:'Burnaboy',
        time:'3:44',
        id:2,
        originalId:2
    },
    {
        song:'Rocking',
        artist:'Zinoleesky',
        time:'2:46',
        id:3,
        originalId:3
    },
    {
        song:'Be something',
        artist:'Polo g ft Lil Baby',
        time:'3:14',
        id:4,
        originalId:4
    },
    {
        song:'Run away',
        artist:'Kofee',
        time:'3:04',
        id:5,
        originalId:5
    },
    {
        song:'Riding with it',
        artist:'G herbo',
        time:'3:17',
        id:6,
        originalId:6
    },
    {
        song:'Nwoke owa',
        artist:'Chike',
        time:'3:09',
        id:7,
        originalId:7
    },
    {
        song:'What happened to virgil',
        artist:'Lil durk ft Gunna',
        time:'3:01',
        id:8,
        originalId:8
    },
    {
        song:'Essence',
        artist:'Wizkid ft Tems',
        time:'4:08',
        id:9,
        originalId:9
    },
    {
        song:'Enjoy yourself',
        artist:'Pop smoke ft Burnaboy',
        time:'3:19',
        id:10,
        originalId:10
    },
    {
        song:'Bad bad bad',
        artist:'Young thug ft Lilbaby',
        time:'3:32',
        id:11,
        originalId:11
    },
    {
        song:' Ye ye ye',
        artist:'Omah kay',
        time:'3:27',
        id:12,
        originalId:12
    },
    {
        song:'Champion sound',
        artist:'Davido ft focalistic',
        time:'4:13',
        id:13,
        originalId:13
    },
    {
        song:'Xo',
        artist:'Beyonce',
        time:'3:36',
        id:14,
        originalId:14
    },
    {
        song:'Finesse',
        artist:'Pheelz ft Bnxn',
        time:'2:20',
        id:15,
        originalId:15
    },
    {
        song:'Slide',
        artist:'Calvin Haris ft Frank Ocean ft Migos',
        time:'3:51',
        id:16,
        originalId:16
    },
    {
        song:'Italy',
        artist:'Buju',
        time:'3:08',
        id:17,
        originalId:17
    },
    {
        song:'Holy Father ',
        artist:'Victony ft Mayorkun',
        time:'3:05',
        id:18,
        originalId:18
    },
    {
        song:'Southy love',
        artist:'Fireboy ft Peruzzi',
        time:'3:18',
        id:19,
        originalId:19
    },
    {
        song:'Feaky Deaky',
        artist:'Tyga ft Doja Cat',
        time:'3:35',
        id:20,
        originalId:20
    }
]



// import React ,{useState,useRef}from 'react'
// import './Songs.css'
// import {IconButton } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import SearchIcon from '@mui/icons-material/Search';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import ShuffleIcon from '@mui/icons-material/Shuffle';
// import RepeatIcon from '@mui/icons-material/Repeat';
// import RepeatOneIcon from '@mui/icons-material/RepeatOne';
// import AddIcon from '@mui/icons-material/Add';
// import ClearIcon from '@mui/icons-material/Clear';
// import PauseIcon from '@mui/icons-material/Pause';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
// import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
// import {Volume} from './Volume'
// import VolumeDown from '@mui/icons-material/VolumeDown';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
// import { allSongs } from './AllSongsDb';
// const Songs = ({nowPlaying,page,DarkMode,playlists,handleAllSongs}) => {
//     // console.log(playlists)
//     const [Playing, setPlaying] = useState('')
//     const [optionInfo, setoptionInfo] = useState('')
//     const [isPlaying, setisPlaying] = useState(true)
//     const [pause, setpause] = useState(true)
//     const [allsongs, setallsongs] = useState(allSongs)
//     const [songstest, setsongstest] = useState(allSongs)
//     const [playlistId, setplaylistId] = useState([])
//     const [playnext, setplaynext] = useState([])
//     const [options, setoptions] = useState(false)
//     const [currentlyplaying, setcurrentlyplaying] = useState(true)
//     const [shuffleOn, setshuffleOn] = useState(false)
//     const [repeatOn, setrepeatOn] = useState(false)
//     const [playlist, setplaylist] = useState(false)
//     const [playnextOn, setplaynextOn] = useState(false)
//     const [plaiyingIdBeforePlaynext, setplaiyingIdBeforePlaynext] = useState(0)
//     const [count, setcount] = useState(0)
//     let allPlayNextSongs=allSongs
//     let pnSongs=[ ]

//     // const [allPlayNextSongs, setallPlayNextSongs] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
//     // function to get the information of the currently playing song 
//     let a=[]
//     allsongs.map(item=>{
//         a.push(item)
//         // return 
//     })
//     // console.log(a)
//     // const NowPlaying=(songinfo)=>{
//     //     setPlaying(songinfo)
//     //     nowPlaying(songinfo)
//     // }  
//         let songs=document.querySelectorAll('.kkk')[0]
//         let currentlyPlaying=document.querySelectorAll('.NowPlaying')[0]

//     // function to show currently playing song 
//     const displayPlaying=(songinfo)=>{
//         setPlaying(songinfo)
//         nowPlaying(songinfo)
//         let currentlyPlaying=document.querySelectorAll('.NowPlaying')[0]
//         let songs=document.querySelectorAll('.kkk')[0]
//         songs.classList.add('songsWrapper')
//         currentlyPlaying.classList.add('block')
//     }
//     // the code below is a trial for the play next functionality
//     // else if(playnext.length > 0){
//     //     alert('code reacheable')
//     //     playnext.reverse()
//     //     let id=playnext[0]
//     //     let result=allsongs.filter(item=>{
//     //         return item.id === id
//     //     })
//     //         console.log(result)
//     //         result.map(item=>setPlaying(item))
//     //         let newPlaynext=playnext.filter(item=>{
//     //             return item.id === id
//     //         })
//     //         setplaynext(newPlaynext)
//     //         console.log(playnext)

//     // }
//     // function for the skip button
//     // let count=0
//     const Next=()=>{
//         if(playnextOn){
//             // const prevId=Playing.id
//             // console.log(prevId,'prevId')
//             // setplaiyingIdBeforePlaynext(Playing.id + 1)
//             let id=playnext[count]
//             let result=allsongs.filter(item=>{
//                 return item.id === id
//             })
//             result.map(item=>setPlaying(item))
//                 console.log(result)
//                 if(result.length === 0){
//                     let id=plaiyingIdBeforePlaynext + 1
//                     // let id=plaiyingIdBeforePlaynext + 1
//                     let result=allsongs.filter(item=>{
//                         return item.id === id
//                     })
//                     result.map(item=>setPlaying(item))
//                     console.log(result)
//                     setplaynextOn(false)
//                     return
//                 }
//                 // count++
//                 setcount(count + 1)
//                 // console.log(count)
//         }else if(shuffleOn){
//             let id=Math.floor(Math.random(16) * 20)
//             if (id > 20){
//                 id = 20
//             }else{
//                 let result=allsongs.filter(item=>{
//                     return item.id === id
//                 })
//                 result.map(item=>setPlaying(item))
//             }
//         }else{
//             console.log(Playing.id)
//             let id=Playing.id + 1
//             console.log(id)
//             if (id > 20){
//                 id = 20
//             }else{
//                 let result=allsongs.filter(item=>{
//                     return item.id === id
//                 })
//                     console.log(result)
//                     result.map(item=>setPlaying(item))
                
//             }
//         }
//     }
//     console.log(plaiyingIdBeforePlaynext)
//     // function for the previous button
//     const Back=()=>{
//             let id=Playing.id - 1
//             if (id < 1){
//                 id = 1
//             }else{
//                 let result=allsongs.filter(item=>{
//                     return item.id === id
//                 })
//                 result.map(item=>setPlaying(item))
//             }
//     }
//     // function to play the next song on play next
//     // let count=0
//     // const playNextBtnTest=()=>{
//     //     let id=playnext[count]
//     //     // if (id > playnext.length){
//     //     //     id = playnext.length
//     //     // }else{
//     //         let result=allsongs.filter(item=>{
//     //             return item.id === id
//     //         })
//     //             console.log(result)
//     //             if(result.length === 0)return
//     //             count++
//     //             console.log(count)
//     //             // result.map(item=>setPlaying(item))
//     //     // }
//     // }
//     // function to remove currently playing song 
//     const cancelPlaying=()=>{
//         let currentlyPlaying=document.querySelectorAll('.NowPlaying')[0]
//         let songs=document.querySelectorAll('.kkk')[0]
//          songs.classList.remove('songsWrapper')
//         currentlyPlaying.classList.remove('block')
//     }
//     // function to delete a song
//     const deleteSong=(id)=>{
//         let newSongs=allsongs.filter(item=>{
//             return item.id !== id
//         })
//         let no=1

//             newSongs.forEach(item=>{
//                 item.id=no
//                 a.push(item)
//                 no++
//               })  
//         // let a=newSongs.map(item=>{
//         //   item.grade=no
//         //   no++
//         //   setsongstest(item)
//         //   return item
//         // })  
//         // console.log(newSongs)
//         // console.log(a)
//         setallsongs(newSongs)
//         // console.log(allsongs)
//         handleAllSongs(newSongs)
//         //  console.log(allSongs)
//     }
//     // function to display more options like add to playlist,delete 
//     const handleOptions=(musicinfo)=>{
//         let current=document.querySelector('.current')
//         setoptionInfo(musicinfo)
//         current.classList.toggle('currentVisible')
//     }

//     // function to remove options 
//     const removeOptions=(musicinfo)=>{
//         let current=document.querySelector('.current')
//         current.classList.remove('currentVisible')
//     }
//     // functio  to display playlists 
//     const displayPlaylist=(id)=>{
//         setplaylist(true)
//         setplaylistId(id)
//         removeOptions()
//     }
//     // functio  to add to playlists 
//  let memory = new Set
//     const addToPlaylist=(name)=>{
//         let data= JSON.parse(sessionStorage.getItem(name))
//         console.log(data)
//         let cart=[]
//         data?.map(item=>{
//             console.log(item)
//             memory.add(item)

//         })
//         memory.add(playlistId)
 
//         memory.forEach(item=>{
//           cart.push(item)
//         })
//         console.log(cart)
//         sessionStorage.setItem(name,JSON.stringify(cart))
//         setplaylist(false)
//     }
//     const playNext=(Id)=>{
//         setplaynextOn(true)
//         // console.log(Playing.id)
//       setplaiyingIdBeforePlaynext(Playing.id)
//     //   setplaiyingIdBeforePlaynext((a) => [...a, Playing.id])
//       setplaynext((a) => [...a, Id])
//     // for(let i=0;i<allPlayNextSongs.length;i++){
//     //     if(i < Playing.id ){
//     //         playnext[i]=allPlayNextSongs[i].id
//     //     }else{
//     //     playnext[i+1]=allPlayNextSongs[i].id

//     //     }
//     // }
//     // playnext[Playing.id]=id

//      //  for(let i=0;i<allPlayNextSongs.length;i++){
//         //     if(i < Playing.id ){
//         //         playnext[i]=allPlayNextSongs[i]
//         //     }else{
//         //     playnext[i+1]=allPlayNextSongs[i]
//         //     }
//         // }
//         // playnext[Playing.id]=id
//             // let container=new Array()

//         //  for(let i=0;i<allPlayNextSongs.length;i++){
//         //     if(i < Playing.id ){
//         //         pnSongs[i]=allPlayNextSongs[i].id
//         //     }else{
//         //     pnSongs[i+1]=allPlayNextSongs[i].id
//         //     }
//         // }
//         // pnSongs[Playing.id]=Id
//         // allsongs=allPlayNextSongs
//         // container=playnext
//         // allPlayNextSongs=pnSongs
//         // setallPlayNextSongs(playnext)
//         // console.log(allPlayNextSongs)
//         // console.log(pnSongs)

//     }
//     console.log(playnext)
//     // console.log(pnSongs)
//     // console.log(allPlayNextSongs)
    
  
//   return (
//     <div className={ DarkMode ? 'SongsDark' : 'Songs'}>
//         <nav>
            
//             <div className="img" onClick={()=>page('home')}>
//                     {
//                         DarkMode ?
//                         <IconButton>
//                             <ArrowBackIcon className='white'/>
//                          </IconButton>
//                         :
//                         <IconButton>
//                         <ArrowBackIcon className='black'/>
//                         </IconButton>
    
//                     }
//             </div>
//             {/* <h1 onClick={ff}>songs</h1> */}
//             {/* <h1 onClick={()=>playNextBtnTest()}>songs</h1> */}
//             <h1>songs</h1>
//             <div className="search" onClick={()=>page('search')}>
//                     {
//                         DarkMode ?
//                         <IconButton>
//                             <SearchIcon className='white'/>
//                          </IconButton>
//                         :
//                         <IconButton>
//                         <SearchIcon className='black'/>
//                         </IconButton>
    
//                     }   
//             </div>
//         </nav>
//         <div className="kkk" >
//             {a.map(item=>{
//             return <div key={item.id}  className="wrapper">
//                     <div className="songImg"></div>
//                     <div className="info" onClick={()=>displayPlaying(item)}>
//                         <h4>{item.song}</h4>
//                         <div className="artist">
//                             <p>{item.artist}</p>
//                             <p>{item.time}</p>
//                         </div>
//                     </div>
//                     <div className="options" onClick={()=>handleOptions(item)}>
//                         {
//                             DarkMode ?
//                             <IconButton>
//                                 <MoreVertIcon className='white'/>
//                             </IconButton>
//                             :
//                             <IconButton>
//                             <MoreVertIcon className='black'/>
//                             </IconButton>
        
//                         }
//                     </div>
//                 </div>
//             })}
//         </div>
//         <div className="current">
//             <div className="currentSong">
//                 <div className="songImg"></div>
//                 <div className="currentSongInfo">
//                     <h2 className='laptop'>{optionInfo.song}-{optionInfo.artist}</h2>
//                     <h2 className='mobile'><marquee behavior="scroll" direction="left">{optionInfo.song}-{optionInfo.artist}</marquee></h2>
//                     <p>{optionInfo.time}</p>
//                 </div>
//                 <div className="cancel">
//                     {
//                         DarkMode ?
//                         <IconButton onClick={removeOptions}>
//                             <ClearIcon className='white' />
//                         </IconButton>
//                         :
//                         <IconButton onClick={removeOptions}>
//                             <ClearIcon className='black' />
//                         </IconButton>
//                     }
//                 </div>
//             </div>
//             <div className="currentInfo">
//                 <div className="container" onClick={()=>playNext(optionInfo.id)}>
//                     {
//                         DarkMode ?
//                         <IconButton>
//                             <PlaylistPlayIcon className='white'/>
//                         </IconButton>
//                         :
//                         <IconButton>
//                             <PlaylistPlayIcon className='black'/>
//                         </IconButton>
//                     }
//                     <p>Play next</p>
//                 </div>
//                 <div className="container" onClick={()=>displayPlaylist(optionInfo.id)}>
//                 {
//                         DarkMode ?
//                         <IconButton>
//                             <PlaylistAddIcon className='white'/>
//                         </IconButton>
//                         :
//                         <IconButton>
//                             <PlaylistAddIcon className='black'/>
//                         </IconButton>

//                     }
//                     <p>Add to playlist</p>
//                 </div>
//                 <div className="container" onClick={removeOptions}>
//                     {
//                         DarkMode ?
//                         <IconButton>
//                             <DeleteIcon className='white'/>
//                         </IconButton>
//                         :
//                         <IconButton>
//                             <DeleteIcon className='black'/>
//                         </IconButton>

//                     }
//                     <p onClick={()=>deleteSong(optionInfo.id)}>Delete</p>
//                 </div>
//             </div>
//         </div>
//         <div className='absolute'>
//                 {
//                     playlist &&
//                     <div className={DarkMode ? 'PlayListDark' : 'PlayList'}>
//                         <main>
//                             <div className="playlistCancel" onClick={()=>setplaylist(false)}>
//                             <IconButton>
//                                 <ClearIcon className='pink'/>
//                             </IconButton>
//                             </div>
//                             <div className="AddPlaylist" onClick={()=>page('newPlaylist')}>
//                                 <div className="addWrapper" >
//                                     <div className="add">
//                                     {
//                                     DarkMode ?
//                                     <IconButton>
//                                             <AddIcon className='white'/>
//                                     </IconButton>
//                                     :
//                                     <IconButton>
//                                             <AddIcon className='black'/>
//                                     </IconButton>

//                                 }
//                                     </div>
//                                 </div>
//                                 <h3>New Playlist</h3>
//                             </div>
//                             <div className="playlistsContainer">
//                             {playlists.map(item=>{
//                                 return <div className="playlistSongs" key={item} onClick={()=>addToPlaylist(item)} >
//                                             <div className="img" ></div>
//                                             <h3>{item}</h3>
//                                         </div>
//                                 })}
//                             </div>
//                         </main>
//                     </div>
//                 }
//         </div>
//         <div className="NowPlaying">
//             <div className="NowPlayingWrapper">
//                 <div className='Container' onClick={()=>page('nowPlaying')}>
//                     <div className="NowPlayingImg">
//                     </div>
//                     <div className='NowPlayinginfoWrapper'>
//                         <div className="NowPlayinginfo">
//                             <h4 className='laptop' id='song '>{Playing.song} - {Playing.artist}</h4>
//                         </div>
//                         <marquee behavior="scroll"  direction="left"><h4 id='song' className='mobile'>{Playing.song} - {Playing.artist}</h4></marquee>
//                         <p className="time">{Playing.time}</p>
//                     </div>
//                 </div>
                
//                 {/* trial start */}
//                 <div className='musicButtonContainer'>
//                             <div className="musicButton">
//                                 <div className="shuffle">
//                                 {
//                                         shuffleOn 
//                                         ?
//                                         <div onClick={()=>setshuffleOn(false)}>
//                                             <IconButton>
//                                                 <ShuffleOnIcon className='pink repeatImg'/>
//                                             </IconButton>
//                                         </div>
//                                         :
//                                         <div onClick={()=>{
//                                             setshuffleOn(true)
//                                             setrepeatOn(false)
//                                         }}>
//                                             <IconButton>
//                                                 <ShuffleIcon className='pink repeatImg'/>
//                                             </IconButton>
//                                         </div>
//                                     }
//                                 </div>
//                                 <div className="backward" onClick={Back}>
//                                     <IconButton>
//                                         <SkipPreviousIcon className='pink'/>
//                                     </IconButton>
//                                 </div>
//                                 <div className="play">
//                                     {
//                                             isPlaying 
//                                             ?
//                                             <div onClick={()=>setisPlaying(false)}>
//                                                 <IconButton>
//                                                     <PauseIcon className='pink'/>
//                                                 </IconButton>
//                                             </div>
//                                             :
//                                             <div onClick={()=>setisPlaying(true)}>
//                                                 <IconButton>
//                                                     <PlayArrowIcon className='pink'/>
//                                                 </IconButton>
//                                             </div>
//                                         }
//                                 </div>
//                                 <div className="forward" onClick={Next}>
//                                     <IconButton>
//                                         <SkipNextIcon className='pink'/>
//                                     </IconButton>
//                                 </div>
//                                 <div className="repeat">
//                                 {
//                                         repeatOn 
//                                         ?
//                                         <div onClick={()=>setrepeatOn(false)}>
//                                             <IconButton>
//                                                 <RepeatOneIcon className='pink repeatImg'/>
//                                             </IconButton>
//                                         </div>
//                                         :
//                                         <div onClick={()=>{
//                                             setrepeatOn(true)
//                                             setshuffleOn(false)
//                                         }}>
//                                             <IconButton>
//                                                 <RepeatIcon className='pink repeatImg'/>
//                                             </IconButton>
//                                         </div>
//                                     }
//                                 </div>
//                             </div>
//                             <div className="currentMusicLength">
//                                 <div className="musciLength">
//                                     <Volume className='pink'/>
//                                 </div>
//                                 <div className="musicTime">
//                                     <p className='left'>0:00</p>
//                                     <p className='right'>{Playing.time}</p>
//                                 </div>
//                             </div>
//                 </div>

//                 {/* </div> */}
//                 {/* trial end */}
//                 <div className="cancelWrapper">
                    
//                     <div className="pause-play">
//                         {
//                             pause 
//                             ?
//                             <div onClick={()=>setpause(false)}>
//                                 <IconButton>
//                                     <PauseIcon className='pink'/>
//                                 </IconButton>
//                             </div>
//                             :
//                             <div onClick={()=>setpause(true)}>
//                                 <IconButton>
//                                     <PlayArrowIcon className='pink'/>
//                                 </IconButton>
//                             </div>
//                         }
//                     </div>
//                     <div className="Volume">
//                         <VolumeDown className='pink'/>
//                         <Box width={160}>
//                             <Slider
//                             size="small"
//                             className='vol'
//                             defaultValue={70}
//                             secondary= 'teal'
//                             aria-label="Small"
//                             valueLabelDisplay="auto"
//                             />
//                         </Box>
//                     </div>
//                     <div className="cancel" onClick={cancelPlaying}>
//                         <IconButton>
//                             <ClearIcon className='pink'/>
//                         </IconButton>
//                     </div>
//                 </div>

//             </div>
        
//         </div>
//     </div>
//   )
// }

// export default Songs