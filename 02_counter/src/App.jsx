import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
    //let counter = 5;
    let [counter,setcounter] = useState(10); // changes propogate karane ki ninja technique
    // counter is variable declaration 
    // setcounter is function used to update counter in ui 
    // name conviction is free 
    const addvalue = ()=>{
      setcounter(counter+1);
    }
    const dec = ()=>{
      if(counter>0){
      setcounter(counter-1);}
    }
  return (
    <>
      <h1>counter value :{counter}</h1>
     <button
     onClick={addvalue}>increase</button>
     <button
     onClick={dec}>decrease</button>
    </>
  )
}

export default App
