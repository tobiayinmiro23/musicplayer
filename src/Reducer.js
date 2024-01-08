import React,{useEffect, useReducer,useState} from 'react'
import {allSongs} from './AllSongsDb'

const Reducer = () => {
    const [input, setinput] = useState('')
    const [page, setpage] = useState('')
    const [uid, setuid] = useState(0)
    const [results, setresults] = useState([])
    // const [data, setdata] = useState([])
    let data=[]
    let data1=[ {
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
    }]
    let data2=[ {
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
    },]
    const reducer3=(state)=>{ 
        fetch(`https://newsdata.io/api/1/news?apikey=pub_210660b996e06920b7f144ea9530f2b020ef9&country=NG&page=${page}`)
        .then(res=>res.json())
        .then(res=>{
            // console.log(res)
            if(res?.status !== 'success' ){
                alert(res?.message)
            }
           else{
                setresults(res?.results)
                // setresults((a)=>[...a,res?.results])    
                // res?.results.map(item=>{
                //     setresults([...item])     
                   
                // })      
                setpage(res.nextPage)
            }
            // console.log(results)
        })
        .catch(err=>console.log(err))

        results.map(item=>{
            return   state=[...state,item]
        })
        // setresults(state)
        return state

    }
    // let result=
    const newPage=()=>{
        fetch(`https://newsdata.io/api/1/news?apikey=pub_210660b996e06920b7f144ea9530f2b020ef9&country=NG&page=${page}`)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if(res?.status !== 'success' ){
                alert(res?.message)
            }
           else{
              res?.results.map(item=>{
                  setresults((a)=>[...a,item])
                })    
                setpage(res.nextPage)
            }
        })
        .catch(err=>console.log(err))
    }
    const handleSearch=(e)=>{
        fetch(`https://newsdata.io/api/1/news?apikey=pub_210660b996e06920b7f144ea9530f2b020ef9&country=NG&page=${page}`)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if(res?.status !== 'success' ){
                alert(res?.message)
            }
           else{
                setresults(res?.results)
                // setresults((a)=>[...a,res?.results])    
                // res?.results.map(item=>{
                //     setresults([...item])     
                   
                // })      
                setpage(res.nextPage)
            }
            // console.log(results)
        })
        .catch(err=>console.log(err))
    }
    const [state3, dispatch3] = useReducer(reducer3, results)
    // console.log(state3)
    // console.log(page)
    console.log(results)

useEffect(()=>{
    newPage()
},[])
 
  return (
    <div className='Reducer'>
        <h1>testing</h1>
        <button onClick={()=>{handleSearch()}}>get news</button>
        {/* <button onClick={()=>{dispatch3()}}>next page </button> */}
        <div className="newsContainer">
           {
            results?.map(item=>{
     return <div className="news" key={item?.link}>
                <a href={item?.link} target='_blank'>
                <div className="img"> <img style={{border: "1px solid lightgray"}}  src={item?.image_url === null ? '/image/newshub.jpeg' : item?.image_url} alt="" /> </div>
                <div className='info'>
                    <div className="title"> <h3>{item?.title}</h3></div>
                    <div className='wrapper'>
                        <div className="time">
                            <div className="img"><img src="/image/clock.png" alt="" /></div>  
                            {/* <p className='source'>{item?.pubDate.split(' ')[0]}</p> */}
                        </div>
                        <p className='source'>{item?.source_id}</p>
                    </div>
                </div>
                </a>
            </div>
            })
           }
        </div>
        <button onClick={()=>{newPage()}}>next page </button>
        {/* <div>
            {
                state3.map(item=>{
                    return <div key={item.id}>
                        <div>{item.song}</div>
                        <div>{item.artist}</div>
                        <p>{item.time}</p>
                        <button onClick={()=>{dispatch3()}}>add songs</button>
                    </div>
                })
            }
        </div> */}


         {/* <div>
        <h2>{state1}</h2>
        <button onClick={()=>{dispatch1({type:"increment"})}}>increase</button>
        <button onClick={()=>{dispatch1({type:"decrement"})}}>decrease</button>
        <button onClick={()=>{dispatch1({type:"reset"})}}>reset</button>
        </div> */}

       {/* <div>
            <input type="text" onInput={(e=>setinput(e.target.value))} />
            <button onClick={()=>{dispatch({type:"newTodo"})}}>add todo</button>
       </div> */}
       
        {/* <div>
            {
                state.map(item=>{
                    return <div key={item.id}>
                            <h3>{item.todo}</h3>
                            <button onClick={()=>{dispatch({type:"update",payload:item.id})}}>update</button>
                            <button onClick={()=>{dispatch({type:"delete",payload:item.id})}}>delete</button>
                    </div>
                })
            }
        </div> */}
    </div>
  )
}



export default Reducer

   // const reducer2=(state,action)=>{
    //     if(action.type==='increment') {
    //         console.log('inc')
    //         return state + 1
    //     }
    //     if(action.type==='decrement') return state - 1
    //     if(action.type==='reset') return 0
    // }
    // const [state1, dispatch1] = useReducer(reducer2, 0)

    // let obj=[]
    // const reducer=(state,action)=>{
    //     if(action.type==='update'){
    //         console.log(action.payload)
    //         state.map(item=>{
    //             if( item.id === action.payload ) item.todo = 'Update'
    //         })
    //         state=[...state]
    //     }
    //     if(action.type==='delete'){
    //        let a= state.filter(item=>{
    //             return item.id !== action.payload 
    //         })
    //         state=[...a]
    //     }
    //     if(action.type==='newTodo'){
    //           state=[...state,{todo:input ,id: uid}]
    //            setuid(uid + 1)
    //         }
    //         return state
    // }
    // const [state, dispatch] = useReducer(reducer,obj)