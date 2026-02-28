import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {

   const [userData, setUserData] = useState([])
   const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setUserData(response.data)
    
  }

    useEffect(function(){
      getData([index])
    })

    let PrintUserData = <h2 className='text-gray-400 absolute text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h2>

    if(userData.length > 0){
        PrintUserData = userData.map(function(elem,idx){
          return <div key={idx}>
                <a href={elem.url}>
                <div className='h-40 w-44 overflow-hidden bg-black rounded-xl'>
                  <img className='h-full w-full object-cover  ' src= {elem.download_url} alt=""/>
                </div>
                <h2 className='font-bold text-white text-lg flex justify-center items-center'>{elem.author}</h2>
              </a>
          </div>

        })
    }
    
  

  return (
    <div className='bg-black overflow-auto h-screen text-white pt-5 px-5'>
      <div><h1 className=' text-5xl fixed bg-amber-100'>{index}</h1></div>

       <div className='wy-10  flex  p-2 flex-wrap gap-4'>
          {PrintUserData}
       </div>
        <div 
            className='pb-5 pt-2 flex items-center justify-center'>
            <button 
            className='bg-amber-400 text-black p-2  items-center m-3 rounded-xl active:scale-90'
            onClick={() => {
              if(index>1){
                setIndex(index-1)
              }
            }}
            >Prev
            </button>
            <button 
            className='bg-amber-400 text-black p-2  items-center m-3 rounded-xl active:scale-90'
            onClick={() => {
              setIndex(index+1)
              console.log("incresss");
              
            }}
            >
            Next</button>
       </div>
    </div>
    
  )
}

export default App
