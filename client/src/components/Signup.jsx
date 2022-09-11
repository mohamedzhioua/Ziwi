import axios from 'axios';
import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

    const [form, setForm] = useState({
      Email:"",
      Password:"",
    })
            console.log(form)    

    const {Email,Password} = form ;
    const [errors, setErrors] = useState(false);
  
    const handleChange = (event)=>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        // console.log(form)    
           
    }

    const handleSubmit = (event) => {
        event.preventDefault();
      axios.post("/signup",form ,{withCredentials:true})
      .then(response => {
        alert(response.data.message)
        console.log(response)
        // window.location.reload()
        navigate('/login') 

    })
    .catch(errors=>setErrors(errors.response.data))
 
        
}

     

  return (

    <div className="Auth-form-container">
      <form className="Auth-form"  onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary"  >
            <Link to={`/login`}> LogIn</Link>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
            required
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              name='Email'
              value={Email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
            required
            minLength={8}
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              name='Password'
              value={Password}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          
        </div>
      </form>
    </div>
 
    
  )
}

export default Signup