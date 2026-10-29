import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
    let [length,setlength] = useState(8);
    const [num,setnum] = useState(false);
    const [char,setchar] = useState(false);
    let [password,setpassword] = useState('');

    const pass_generator = useCallback(()=>{
      let pass = "";
      let str ='QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
      if(num) str+='1234567890';
      if(char) str+='!@#$%^&*(_)+:'
      for(let i =1;i<=length;i++){
          let ran = Math.floor(Math.random()*str.length+1);
          pass+=str.charAt(ran);
      }
      setpassword(pass)

    },[ length , num , char, setpassword])

    const copytoclipboard = useCallback(()=>{
      passref.current?.select();
      passref.current?.setSelectionRange(0,3)
      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{pass_generator()},[length,pass_generator,num,char])

    // use ref hook for copy button refrence
    let passref=useRef(null) // null is default
  return (
    <>
     <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-400'>
        <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
          <input ref={passref}
           type="text" value={password}
          className=' bg-white outline-none w-full my-2 mx-3'
          placeholder='password'  readOnly/>
          <button className=' bg-amber-300 outline-none text-white px-3 py-0.6 shrink-0  my-1' onClick={copytoclipboard}>copy</button>

        </div>
        <div><div> <input type="range" value={length} min={6} max={50} className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}/>
        <label >length {length}</label></div>
        <div>
          <input type="checkbox" defaultChecked ={num} id='numinput' onChange={()=>{setnum((prev) => !prev)}} />
          <label> nums</label>
           
          <input className=' mx-2'
          type="checkbox" defaultChecked ={char} id='charinput' onChange={()=>{setchar((prev) => !prev)}} />
          <label> chars</label>
       
        </div>

        </div>
     </div>
    </>
  )
}

export default App
