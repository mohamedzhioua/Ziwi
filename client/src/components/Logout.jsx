import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Logout (){
    const navigate = useNavigate();
    const logoutUser = ()=>{

 axios.get('/logout',{withCredentials:true})
 .then(response => {
    alert(response.data)      
      console.log(response.data)
      navigate('/login')
    })
.catch(err=> console.log(err.response))
    }

    useEffect(() => {
        logoutUser()
    },[])



  return (
    <div onClick={(e)=>logoutUser()}> </div>
    
  )
}

export default Logout