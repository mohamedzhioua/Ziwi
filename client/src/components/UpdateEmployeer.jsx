import React, { useEffect, useState } from "react";
import Input from "./Input"
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function UpdateEmployee() {
    const [form, setForm] = useState({});
  const {id} = useParams();
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});


    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        console.log(form)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`/employees/${id}`, form)
        .then(res=>{
          navigate('/Home')
        })
        .catch(err=>setErrors(err.response.data))
        
      }

      useEffect( () => {
        axios.get(`/employees/${id}`).then((res) => {
          setForm(res.data);
        })  
      },[]);
   


    return (

        <div className="container mt-5 col-12 col-lg-4">
            <form onSubmit={handleSubmit}>
                <Input label="Email" type="text" name="Email"onChange={handleChange} errors={errors.Email} value={form.Email} />
                <Input label="Lastname" type="text" name="Lastname"onChange={handleChange} errors={errors.Lastname} value={form.Lastname} />
                <Input label="Firstname" type="text" name="Firstname"onChange={handleChange} errors={errors.Firstname} value={form.Firstname}
                />
                <Input label="Age" type="text" name="Age"onChange={handleChange} errors={errors.Age} value={form.Age}/>
                <button className="btn btn-primary" type='submit'>Confirm</button>
            </form>
        </div>

    )

}
export default UpdateEmployee