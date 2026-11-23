import usercontext from "../Context/context";
import React,{useContext} from "react";
function Profile(){
        const {user} = useContext(usercontext)

    if(!user) return <div>plzz !!  LOG In</div>
    return <div> wel-CO  {user.username}</div>
} 

export default Profile;