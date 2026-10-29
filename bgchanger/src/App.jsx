import { useState } from 'react'
import './App.css'

function App() {
  const [color,setcolor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen duration-200' 
      style={{backgroundColor : color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className=' flex flex-wrap justify-center gap-3 shadow-xl bg-black px3 py2 rounded-4xl'>
            <button 
            onClick={()=>setcolor('red')}
            className=' mx-2 my-2 bg-red-500 outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundcolor:'red'}}>RED</button>

             <button 
             onClick={()=>{setcolor('purple')}}
            className='mx-2 my-2 bg-purple-500 outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundcolor:'purple'}}>PURPLE</button>

             <button 
             onClick={()=>{ setcolor('blue')}}
            className='mx-2 my-2 bg-blue-500 outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundcolor:'blue'}}>Blue</button>

             <button 
             onClick={function(){ setcolor('gray')}}
            className='mx-2 my-2 bg-gray-500 outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundcolor:'red'}}>gray</button>
          </div>
          
        </div>

      </div>
    </>
  )
}

export default App
