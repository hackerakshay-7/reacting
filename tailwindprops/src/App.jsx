import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let arr = [1,2,3,4,5];
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'> Tailwind tutorial</h1>

     <Card channel ='bihari jaat' myvar = {arr}/>   /* these passed values are called props */
      <Card channel = 'andaman nicobar'/>

     
    

    </>
  )
}

export default App
