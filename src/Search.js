import React,{useState,useEffect,useRef} from 'react'
import './Search.css'
import {IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
const Search = ({nowPlaying,page,DarkMode,songsdb}) => {

  const [searchText, setsearchText] = useState('')
  const [searchResult, setsearchResult] = useState([])
  const [noResult, setnoResult] = useState(false)
  let inputField=useRef()
  useEffect(()=>{
    inputField.current.focus()
  },[])

//   function to search for a song 
  const handleSearch=()=>{
    setnoResult(false)
      if(searchText !== ''){
        var result=songsdb.filter(item=>{
            return item.song.toLowerCase().includes(searchText.toLowerCase())
          })
          if(result.length===0)setnoResult(true)
          setsearchResult(result)
      }
  }
//   function that renders the NowPlaying component 
  const playSearchResult=(musicinfo)=>{
      nowPlaying(musicinfo)
      page('nowPlaying')
  }
  return (
    <div className={DarkMode ? 'darkMode' : 'lightMode'}>
         {/* <div className={DarkMode ? 'SearchDark' : 'Search'}> */}
         <div className='Search'>
         <nav>
                <div className="img" onClick={()=>page('songs')}>
                        <IconButton>
                            <ArrowBackIcon className={DarkMode ? 'white' : 'black' }/>
                         </IconButton>
                 
                </div>
                <input type="search" value={searchText} ref={inputField} onInput={(e)=>setsearchText(e.target.value)} placeholder='Search songs' name="" id="" />
                <div className="img" onClick={handleSearch}>
                    <IconButton>
                        <SearchIcon className={DarkMode ? 'white' : 'black' }/>
                     </IconButton>
                  
                </div>
            </nav>
            <main>
                {noResult && <h3 className='noResult'>No Result</h3>}
            <div className="searchWrapper">
                <div className="Songs">
                    <div className="kkk">
                        {searchResult.map(item=>{
                        return <div key={item.id} onClick={()=>playSearchResult(item)} className="wrapper">
                                <div className="songImg"></div>
                                <div className="info" >
                                    <h4>{item.song}</h4>
                                    <div className="artist">
                                        <p>{item.artist}</p>
                                        <p>{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                
            </div>
            </main>
    </div>
    </div>
  )
}

export default Search