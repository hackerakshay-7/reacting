
import React,{useState,useContext} from "react";
import Usercontext from "../Context/context";

function Login (){
    const [username,setusername] = useState('');
    const [pass , setpass] = useState('')
        const {setuser} = useContext(Usercontext);
        const handlesubmit = (e)=>{
            e.preventDefault();
            setuser({username,pass})
        }
    return(
        <div>
            <input type="text"  placeholder="username"
            value={username}  onChange={ (e)=>{ setusername(e.target.value)}}/>
            <input type="password" placeholder="password" value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
            <button onClick={handlesubmit}>submit</button>
        </div>
    )
}
export default Login;