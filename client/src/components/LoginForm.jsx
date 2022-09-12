import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
 

function LoginForm() {
 
    const [form, setForm] = useState({})
    const   [isConnected ,setIsConnected]=useState(false)
    const [errors, setErrors] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event)=>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        console.log(form)    
           
    }

    const handleSubmit = (event) => {
        event.preventDefault();
      axios.post("/login",form ,{withCredentials:true})
      .then(response => {
        alert(response.data.message)      
          console.log(response.data)
         setIsConnected(true)
          navigate('/Home')
        })
        .catch(err=>setErrors(err.response.data))
}

     

  

  return (
    <div className="Auth-form-container">
    <form className="Auth-form"  onSubmit={handleSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">logIn</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
          required
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            name='Email'
            value={form.Email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
          required
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            name='Password'
            value={form.Password}
            onChange={handleChange}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
           Submit 
 
          </button>
        </div>
        <p className=" text-right mt-2">
          <Link to={`/signup`}>register if you dont have account</Link>
        </p>
      </div>
    </form>
  </div>
)
  
}

export default LoginForm