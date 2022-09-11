import React from 'react'
import { useEffect } from 'react'
import Input from './Input'
import UsersRowTab from './EmployeesRowTab'
import axios from "axios"
import { useState } from 'react'

function Home() {
    const [employees, setEmployees] = useState([])
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({});

    // get all Users from data 
    useEffect(() => {
        axios.get('/employees')
            .then(result => {
                console.log(result.data);
                setEmployees(result.data)
            })
    },[])

    // add a User
const handleChange = (event)=>{
    setForm({
        ...form,
        [event.target.name]: event.target.value
    })
    console.log(form)    
       
}

const handleSubmit = (event) => {
    event.preventDefault();
 axios.post("/employees",form)
 .then(Response=>{
    alert(Response.data.message)
    window.location.reload()
 })
 .catch(err=>setErrors(err.response.data))
 
}

//delete a user 
const Delete = (id__)=>{
    if(window.confirm("are you sure to delete this employee")){
 
     axios.delete(`/employees/${id__}`)
     .then(Response=>{
        alert(Response.data.message)
  
     })
   }
}
    return (
        <div className="row p-4">
            <div className="mt-4">
                <h1>Ziwi High-Tech Company</h1> <br />
            </div>
            <div className="col-12 col-lg-4">
                <form onSubmit={handleSubmit}>
                    <Input label="Email" type="text" name="Email" onChange={handleChange}  errors={errors.Email}/>
                    <Input label="Lastname" type="text" name="Lastname" onChange={handleChange}   errors={errors.Lastname}/>
                    <Input label="Firstname" type="text" name="Firstname" onChange={handleChange}  errors={errors.Firstname}/>
                    <Input label="Age" type="text" name="Age" onChange={handleChange}  errors={errors.Age}/>
                    <button className="btn btn-primary" type='submit'>Add user </button>
                </form>
            </div>
            <div className="col-12 col-lg-7">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'>Email</th>
                            <th scope='col'>Lastname</th>
                            <th scope='col'>Firstname</th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(({ Email, Lastname, Firstname, Age, _id  }) =>
                                <UsersRowTab Email={Email}
                                    Lastname={Lastname}
                                    Firstname={Firstname}
                                    Age={Age}
                                    Id={_id}
                                    Delete={Delete} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default Home